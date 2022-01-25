---
title: 'simcardems: A FEniCS-based cardiac electro-mechanics solver'
tags:
  - Python
  - FEniCS
  - Cardiac Electro-Mechanics
  - Finite Element Method
  - Computational Biology
authors:
  - name: Henrik Nicolay Topnes Finsberg
    orcid: 0000-0003-3766-2393
    affiliation: "1"
  - name: Ilsbeth Gerarda Maria van Herck
    affiliation: "1"
  - name: Cécile Daversin-Catty
    affiliation: "1"

affiliations:
 - name: Simula Research Laboratory, Oslo, Norway
   index: 1

date: 01 February 2022
bibliography: paper.bib
---

# Summary

Modeling and simulations can help us to develop better understanding of the physiology and pathophysiology of the heart. It is especially challenging to study interactions across different scales, since of this tight coupling between several mechanisms. One example of this is in the modeling the effect of drugs. A drug might block an ion channel in the cell, causing a change in the flow of ions in and out of the cell. Understanding how this effect propagates to the organ level and affects the electrophysiology and mechanics of the heart is key.

An electromechanics solver contains a model that couples the models at the cellular level to the models at the tissue level, i.e a monodomain model for the electrophysiology and a hyperelastic continuum model for the mechanics.

The availability of software for performing fully coupled cardiac electro-mechanics is currently limited, but the ones that exist are typically written in a low-level language such as C[@arens2018gems] or C++[@Cooper2020]. The SIMula CARDiac Electro Mechanics Solver, abbreviated `simcardems`, fuses the functionality from `pulse`[@finsberg2019pulse] and `cbcbeat`[@rognes2017cbcbeat] which are both based on the open source finite element framework FEniCS[@logg2012automated]. The implementation and user interface is written in python which makes it more applicable for a wide range of scientistic which are not necessarily expert programmers. Furthermore, since FEniCS utilizes just-in-time compilation to compile the code into highly efficient C++ code, that also support high performance compting ar

A command line interface is available for running quick simulations using pre-defined options. For more fine-tuned control the user can use the python API.

# Statement of need

`simcardems` is Python package for performing cardiac electro-mechanics simulations. The package is developed at Simula Research Laboratory as part of the SimCardioTest project. One of the aims of the SimCardioTest project is develop a framework for using in-silico models to simulate the efficacy and safety of drugs.

The `simcardems` software enables simulation of drugs response in hearth through a multi-scale model of the heart. Drugs work in a way such that they block or stimulate different receptors in the underlying cell model which can be modeled by changes in the model parameters. The effect of the drugs at the organ level can thereby be modeled using this software.

Even though the purpose of the project is to study the drug effects, the software can be used to study cardiac electro-mechanics in general. `simcardems` is therefore also a great tool to use for learning about cardiac electro-mechanics


# Acknowledgements
Add acknowledgment to SimcardioTest project

# References