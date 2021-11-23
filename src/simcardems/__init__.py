import logging as _logging

import daiquiri as _daiquiri
import dolfin as _dolfin
import pulse as _pulse

from . import cli
from . import datacollector
from . import em_model
from . import ep_model
from . import mechanics_model
from . import ORdmm_Land
from . import postprocess
from . import save_load_functions
from . import utils
from .datacollector import DataCollector
from .datacollector import DataLoader
from .em_model import EMCoupling
from .mechanics_model import LandModel
from .mechanics_model import MechanicsProblem
from .mechanics_model import RigidMotionProblem
from .version import __version__


def set_log_level(level):
    from daiquiri import set_default_log_levels

    loggers = [
        "simcardems.cli.logger",
        "simcardems.datacollector.logger",
        "simcardems.ep_model.logger",
        "simcardems.em_model.logger",
        "simcardems.mechanics_model.logger",
        "simcardems.ORdmm_Land.logger",
        "simcardems.postprocess.logger",
        "simcardems.save_load_functions.logger",
        "simcardems.utils.logger",
    ]
    _pulse.set_log_level(level)
    _daiquiri.setup(level=level)
    set_default_log_levels((logger, level) for logger in loggers)


set_log_level(_logging.INFO)

for module in ["matplotlib", "h5py", "FFC", "UFL"]:
    _logger = _logging.getLogger(module)
    _logger.setLevel(_logging.WARNING)


_dolfin.parameters["form_compiler"]["cpp_optimize"] = True
flags = ["-O3", "-ffast-math", "-march=native"]
_dolfin.parameters["form_compiler"]["cpp_optimize_flags"] = " ".join(flags)
_dolfin.parameters["form_compiler"]["quadrature_degree"] = 3
_dolfin.parameters["form_compiler"]["representation"] = "uflacs"


__all__ = [
    "datacollector",
    "em_model",
    "ep_model",
    "mechanics_model",
    "ORdmm_Land",
    "postprocess",
    "save_load_functions",
    "utils",
    "cli",
    "LandModel",
    "MechanicsProblem",
    "RigidMotionProblem",
    "EMCoupling",
    "DataCollector",
    "DataLoader",
    "__version__",
]
