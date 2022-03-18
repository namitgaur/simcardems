import numpy as np
import pytest
from simcardems.cell_model import apply_custom_parameters
from simcardems.cell_model import apply_HF_scaling
from simcardems.cell_model import ORdmm_Land
from simcardems.cell_model import Parameter


def test_parameter_value_no_factor():
    value = 0.4
    p = Parameter("g_CaL", value)
    assert np.isclose(p.factor, 1.0)
    assert np.isclose(p.value, value)


def test_parameter_value_factor():
    value = 0.4
    drug_factor = 0.1
    popu_factor = 0.3
    p = Parameter("g_CaL", value, factors={"drug": drug_factor, "popu": popu_factor})
    assert np.isclose(p.factor, drug_factor * popu_factor)
    assert np.isclose(p.value, value * drug_factor * popu_factor)


def test_parameter_value_add_factor():
    value = 0.4
    drug_factor = 0.1
    popu_factor = 0.3
    p = Parameter("g_CaL", value, factors={"drug": drug_factor, "popu": popu_factor})
    hf_factor = 42.0
    p.add_factor("HF", hf_factor)
    assert np.isclose(p.factor, drug_factor * popu_factor * hf_factor)
    assert np.isclose(p.value, value * drug_factor * popu_factor * hf_factor)


def test_parameter_factors():

    value = 0.4
    drug_factor = 0.1
    popu_factor = 0.3
    p = Parameter("g_CaL", value, factors={"drug": drug_factor, "popu": popu_factor})
    hf_factor = 42.0
    p.add_factor("HF", hf_factor)
    factors = p.factors()
    expected_factors = {"drug": 0.1, "popu": 0.3, "HF": 42.0}
    assert set(factors.keys()) == set(expected_factors.keys())
    for k, v in factors.items():
        assert np.isclose(v, expected_factors[k])


def test_parameter_multiply():

    p1 = Parameter("g_CaL", 2.0, factors={"drug": 2.0, "popu": 2.0})
    p2 = Parameter("g_Na", 3.0, factors={"drug": 3.0, "popu": 3.0})
    assert np.isclose(p1 * p2, 8 * 27)
    assert np.isclose(p1 * 27, 8 * 27)
    assert np.isclose(27 * p1, 27 * 8)


def test_parameter_add():

    p1 = Parameter("g_CaL", 2.0, factors={"drug": 2.0, "popu": 2.0})
    p2 = Parameter("g_Na", 3.0, factors={"drug": 3.0, "popu": 3.0})
    assert np.isclose(p1 + p2, 8 + 27)
    assert np.isclose(p1 + 27, 8 + 27)
    assert np.isclose(27 + p1, 27 + 8)


def test_dict():
    from collections import OrderedDict

    p1 = Parameter("g_CaL", 2.0, factors={"drug": 2.0, "popu": 2.0})
    p2 = Parameter("g_Na", 3.0, factors={"drug": 3.0, "popu": 3.0})

    d = OrderedDict([p1, p2])
    assert len(d) == 2
    assert p1.name in d
    assert p2.name in d
    assert d[p1.name] == p1
    assert d[p2.name] == p2


def test_apply_custom_parameters():
    custom_parameters = {
        "GNa": {
            "value": 24.0,
            "factors": {
                "drug": 0.1,
                "popu": 2.0,
            },
        },
        "Gto": {  # Use default value
            "factors": {
                "drug": 0.2,
                "popu": 1.5,
            },
        },
        "kws": {
            "value": 0.015,
        },
    }

    parameters = ORdmm_Land.default_parameters()
    new_parameters = apply_custom_parameters(parameters, custom_parameters)
    assert parameters["GNa"] != new_parameters["GNa"]
    assert parameters["Gto"] != new_parameters["Gto"]
    assert parameters["kws"] != new_parameters["kws"]
    # This parameter has not been change
    assert parameters["kuw"] == new_parameters["kuw"]

    assert (
        new_parameters["GNa"]
        == custom_parameters["GNa"]["value"]
        * custom_parameters["GNa"]["factors"]["drug"]
        * custom_parameters["GNa"]["factors"]["popu"]
    )

    assert (
        new_parameters["Gto"]
        == parameters["Gto"]
        * custom_parameters["Gto"]["factors"]["drug"]
        * custom_parameters["Gto"]["factors"]["popu"]
    )

    assert new_parameters["kws"] == custom_parameters["kws"]["value"]


@pytest.mark.xfail
def test_HF_scaling():
    parameters = ORdmm_Land.default_parameters()
    # This does not work at the momemt because there is
    # not a parameter with the names defined in the
    # HF scaling method
    hf_parameters = apply_HF_scaling(parameters)
    assert hf_parameters is not None
    # TODO: Make some proper assertions