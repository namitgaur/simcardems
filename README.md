![CircleCI](https://circleci.com/gh/ComputationalPhysiology/simcardems/tree/master.svg?style=svg)](https://circleci.com/gh/ComputationalPhysiology/simcardems/tree/master)

# Simula Cardiac Electro-Mechancis Solver

`simcardems` is a FEniCS-based cardiac electro-mechancis solver and is developed as a part of the [SimCardio Test project](https://www.simcardiotest.eu/wordpress/). The solver depdens on [`pulse`](https://github.com/ComputationalPhysiology/pulse) and [`cbcbeat`](https://github.com/ComputationalPhysiology/cbcbeat).


## Installation

Before installing you need to install [FEniCS version 2019.1.0](https://fenicsproject.org/download/). Next you can install `simcardems` with pip

```
python -m pip install git+https://github.com/ComputationalPhysiology/simcardems.git@master
```
or clone the repository and install it from there

```
git clone git@github.com:ComputationalPhysiology/simcardems.git
cd simcardems
python -m pip install .
```

### Development installation

Devlopers shou use editable install and install the development requirements using the following command
```
python -m pip install -e ".[dev]"
```
It is also recommended to install the `pre-commit` hook that comes with the package
```
pre-commit install
```
Note that linters and formatters will run in the CI system.


## Getting started
Checkout the demos in the [demos](demos) folders.


## Automated test

Test are provided in the folder [tests](tests). You can run the test with pytest

```
python3 -m pytest tests -vv
```


## Known issues

- Issue with h5py, see https://github.com/ComputationalPhysiology/pulse#known-issues


## Authors
- Henrik Finsberg (henriknf@simula.no)
- Ilsbeth van Herck (ilse@simula.no)
- Cécile Daversin-Catty (cecile@simula.no)
