# Installation

`simcardems` is a pure python package coupling the cardiac mechanics solver [pulse](https://github.com/finsberg/pulse)
and the cardiac electrophysiology solver [cbcbeat](https://github.com/ComputationalPhysiology/cbcbeat),
which are both python packages based on the legacy version of the open source finite element framework [FEniCS](https://fenicsproject.org/download/archive).

* We recommend using the dedicated [Docker](install_docker.md) container, which includes all the aforementioned dependencies.

* `simcardems` is also available on [PyPI](https://pypi.org/project/simcardems/) and can be installed with [pip](install_pip.md).
This option is recommended for developers who want to contribute to the software, but requires installation of the dependencies.

# Installation

`simcardems` is a pure python package coupling the cardiac mechanics solver [pulse](https://github.com/finsberg/pulse)
and the cardiac electrophysiology solver [cbcbeat](https://github.com/ComputationalPhysiology/cbcbeat),
which are both python packages based on the legacy version of the open source finite element framework [FEniCS](https://fenicsproject.org/download/archive).

* We recommend using the dedicated [Docker](install_docker.md) container, which includes all the aforementioned dependencies.

* `simcardems` is also available on [PyPI](https://pypi.org/project/simcardems/) and can be installed with [pip](install_pip.md).
This option is recommended for developers who want to contribute to the software, but requires installation of the dependencies.

## Installing simcardems on Windows OS
Steps
1. Install a complete Ubuntu terminal environment in Windows Subsystem for Linux (WSL) from Microsoft store
2. Install docker on WSL. sudo apt install docker
3. Create a simcardems container using docker
docker run --name simcardems -v "$(pwd)":/app -p 8501:8501 -dit ghcr.io/computationalphysiology/simcardems
4. Open a shell environment. docker exec -it simcardems bash
5. Run scripts eg. python3 simple_demo.py. Delete results folder for each run in WSL and Windows system before running the simulations
6. Move results folder from WSL to windows system
7. Visualize xdmf files by importing into Paraview
8. To start or stop containers docker start simcardems or docker stop simcardems
9. To remove container docker rm simcardems


