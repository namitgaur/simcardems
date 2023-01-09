Search.setIndex({docnames:["CONTRIBUTING","api","benchmark","cell_model","cli","docker","drug_effects_demo","electro_mechanical_coupling","electrophysiology_model","gui","index","initial_conditions_demo","install","install_docker","install_pip","mechanics_model","release_test","simple_demo","ventricular_geometry","visualization"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,"sphinxcontrib.bibtex":9,sphinx:56},filenames:["CONTRIBUTING.md","api.rst","benchmark.ipynb","cell_model.md","cli.md","docker.md","drug_effects_demo.md","electro_mechanical_coupling.md","electrophysiology_model.md","gui.md","index.md","initial_conditions_demo.md","install.md","install_docker.md","install_pip.md","mechanics_model.md","release_test.md","simple_demo.md","ventricular_geometry.md","visualization.md"],objects:{"":[[1,0,0,"-","simcardems"]],"simcardems.Config":[[1,2,1,"","PCL"],[1,2,1,"","T"],[1,3,1,"","as_dict"],[1,2,1,"","bnd_rigid"],[1,2,1,"","cell_init_file"],[1,2,1,"","debug_mode"],[1,2,1,"","disease_state"],[1,2,1,"","drug_factors_file"],[1,2,1,"","dt"],[1,2,1,"","ep_ode_scheme"],[1,2,1,"","ep_preconditioner"],[1,2,1,"","ep_theta"],[1,2,1,"","fix_right_plane"],[1,2,1,"","geometry_path"],[1,2,1,"","geometry_schema_path"],[1,2,1,"","linear_mechanics_solver"],[1,2,1,"","load_state"],[1,2,1,"","loglevel"],[1,2,1,"","mechanics_ode_scheme"],[1,2,1,"","mechanics_use_continuation"],[1,2,1,"","mechanics_use_custom_newton_solver"],[1,2,1,"","num_refinements"],[1,2,1,"","outdir"],[1,2,1,"","popu_factors_file"],[1,2,1,"","pre_stretch"],[1,2,1,"","save_freq"],[1,2,1,"","set_material"],[1,2,1,"","show_progress_bar"],[1,2,1,"","spring"],[1,2,1,"","traction"]],"simcardems.DataCollector":[[1,4,1,"","names"],[1,3,1,"","register"],[1,4,1,"","results_file"],[1,3,1,"","save_residual"],[1,3,1,"","store"]],"simcardems.DataLoader":[[1,4,1,"","ep_mesh"],[1,3,1,"","extract_value"],[1,3,1,"","get"],[1,4,1,"","mech_mesh"],[1,4,1,"","residual"],[1,4,1,"","size"]],"simcardems.EMCoupling":[[1,3,1,"","coupling_to_ep"],[1,3,1,"","coupling_to_mechanics"],[1,4,1,"","ep_mesh"],[1,3,1,"","ep_to_coupling"],[1,4,1,"","mech_mesh"],[1,3,1,"","mechanics_to_coupling"],[1,3,1,"","register_ep_model"],[1,3,1,"","register_mech_model"]],"simcardems.LandModel":[[1,4,1,"","As"],[1,4,1,"","Aw"],[1,4,1,"","Ta"],[1,3,1,"","Wactive"],[1,4,1,"","Zetas"],[1,4,1,"","Zetaw"],[1,4,1,"","cs"],[1,4,1,"","cw"],[1,4,1,"","dLambda"],[1,4,1,"","dt"],[1,3,1,"","start_time"],[1,4,1,"","t"],[1,3,1,"","update_Zetas"],[1,3,1,"","update_Zetaw"],[1,3,1,"","update_prev"],[1,3,1,"","update_time"]],"simcardems.MechanicsNewtonSolver":[[1,3,1,"","check_overloads_called"],[1,3,1,"","converged"],[1,3,1,"","default_solver_parameters"],[1,3,1,"","register_datacollector"],[1,3,1,"","save_residuals"],[1,3,1,"","solve"],[1,3,1,"","solver_setup"]],"simcardems.MechanicsNewtonSolver_ODE":[[1,3,1,"","update_solution"]],"simcardems.MechanicsProblem":[[1,3,1,"","solve"],[1,4,1,"","u_subspace_index"],[1,3,1,"","update_lmbda_prev"]],"simcardems.ORdmm_Land":[[1,5,1,"","Max"],[1,5,1,"","Min"],[1,1,1,"","ORdmm_Land"],[1,5,1,"","vs_functions_to_dict"]],"simcardems.ORdmm_Land.ORdmm_Land":[[1,3,1,"","F"],[1,3,1,"","I"],[1,3,1,"","default_initial_conditions"],[1,3,1,"","default_parameters"],[1,3,1,"","num_states"]],"simcardems.RigidMotionProblem":[[1,3,1,"","rigid_motion_term"],[1,4,1,"","u_subspace_index"]],"simcardems.Runner":[[1,3,1,"","create_time_stepper"],[1,4,1,"","dt_mechanics"],[1,3,1,"","from_models"],[1,4,1,"","outdir"],[1,3,1,"","save_state"],[1,3,1,"","solve"],[1,3,1,"","store"],[1,4,1,"","t"],[1,4,1,"","t0"]],"simcardems.TimeStepper":[[1,4,1,"","T"],[1,4,1,"","dt"],[1,3,1,"","ms2ns"],[1,3,1,"","ns2ms"],[1,3,1,"","reset"],[1,4,1,"","total_steps"]],"simcardems.cli":[[1,5,1,"","main"]],"simcardems.config":[[1,1,1,"","Config"],[1,5,1,"","default_parameters"]],"simcardems.config.Config":[[1,2,1,"","PCL"],[1,2,1,"","T"],[1,3,1,"","as_dict"],[1,2,1,"","bnd_rigid"],[1,2,1,"","cell_init_file"],[1,2,1,"","debug_mode"],[1,2,1,"","disease_state"],[1,2,1,"","drug_factors_file"],[1,2,1,"","dt"],[1,2,1,"","ep_ode_scheme"],[1,2,1,"","ep_preconditioner"],[1,2,1,"","ep_theta"],[1,2,1,"","fix_right_plane"],[1,2,1,"","geometry_path"],[1,2,1,"","geometry_schema_path"],[1,2,1,"","linear_mechanics_solver"],[1,2,1,"","load_state"],[1,2,1,"","loglevel"],[1,2,1,"","mechanics_ode_scheme"],[1,2,1,"","mechanics_use_continuation"],[1,2,1,"","mechanics_use_custom_newton_solver"],[1,2,1,"","num_refinements"],[1,2,1,"","outdir"],[1,2,1,"","popu_factors_file"],[1,2,1,"","pre_stretch"],[1,2,1,"","save_freq"],[1,2,1,"","set_material"],[1,2,1,"","show_progress_bar"],[1,2,1,"","spring"],[1,2,1,"","traction"]],"simcardems.datacollector":[[1,1,1,"","DataCollector"],[1,1,1,"","DataGroups"],[1,1,1,"","DataLoader"]],"simcardems.datacollector.DataCollector":[[1,4,1,"","names"],[1,3,1,"","register"],[1,4,1,"","results_file"],[1,3,1,"","save_residual"],[1,3,1,"","store"]],"simcardems.datacollector.DataGroups":[[1,2,1,"","ep"],[1,2,1,"","mechanics"]],"simcardems.datacollector.DataLoader":[[1,4,1,"","ep_mesh"],[1,3,1,"","extract_value"],[1,3,1,"","get"],[1,4,1,"","mech_mesh"],[1,4,1,"","residual"],[1,4,1,"","size"]],"simcardems.em_model":[[1,1,1,"","EMCoupling"]],"simcardems.em_model.EMCoupling":[[1,3,1,"","coupling_to_ep"],[1,3,1,"","coupling_to_mechanics"],[1,4,1,"","ep_mesh"],[1,3,1,"","ep_to_coupling"],[1,4,1,"","mech_mesh"],[1,3,1,"","mechanics_to_coupling"],[1,3,1,"","register_ep_model"],[1,3,1,"","register_mech_model"]],"simcardems.ep_model":[[1,5,1,"","default_conductivities"],[1,5,1,"","default_microstructure"],[1,5,1,"","define_conductivity_tensor"],[1,5,1,"","file_exist"],[1,5,1,"","handle_cell_inits"],[1,5,1,"","handle_cell_params"],[1,5,1,"","load_json"],[1,5,1,"","setup_ep_model"],[1,5,1,"","setup_splitting_solver_parameters"]],"simcardems.geometry":[[1,1,1,"","BaseGeometry"],[1,1,1,"","LeftVentricularGeometry"],[1,1,1,"","SlabGeometry"],[1,5,1,"","create_boxmesh"],[1,5,1,"","create_slab_facet_function"],[1,5,1,"","create_slab_microstructure"],[1,5,1,"","load_geometry"],[1,5,1,"","refine_mesh"]],"simcardems.geometry.BaseGeometry":[[1,3,1,"","default_markers"],[1,3,1,"","default_parameters"],[1,3,1,"","default_schema"],[1,4,1,"","ds"],[1,3,1,"","dump"],[1,4,1,"","dx"],[1,4,1,"","ep_mesh"],[1,4,1,"","f0"],[1,4,1,"","f0_ep"],[1,4,1,"","ffun"],[1,4,1,"","ffun_ep"],[1,3,1,"","from_files"],[1,3,1,"","from_geometry"],[1,4,1,"","marker_functions"],[1,4,1,"","mechanics_mesh"],[1,4,1,"","mesh"],[1,4,1,"","microstructure"],[1,4,1,"","microstructure_ep"],[1,4,1,"","n0"],[1,4,1,"","n0_ep"],[1,4,1,"","num_refinements"],[1,4,1,"","outdir"],[1,4,1,"","s0"],[1,4,1,"","s0_ep"],[1,3,1,"","validate"]],"simcardems.geometry.LeftVentricularGeometry":[[1,3,1,"","default_markers"],[1,3,1,"","default_parameters"],[1,3,1,"","validate"]],"simcardems.geometry.SlabGeometry":[[1,3,1,"","default_markers"],[1,3,1,"","default_parameters"],[1,3,1,"","validate"]],"simcardems.land_model":[[1,1,1,"","LandModel"],[1,1,1,"","Scheme"]],"simcardems.land_model.LandModel":[[1,4,1,"","As"],[1,4,1,"","Aw"],[1,4,1,"","Ta"],[1,3,1,"","Wactive"],[1,4,1,"","Zetas"],[1,4,1,"","Zetaw"],[1,4,1,"","cs"],[1,4,1,"","cw"],[1,4,1,"","dLambda"],[1,4,1,"","dt"],[1,3,1,"","start_time"],[1,4,1,"","t"],[1,3,1,"","update_Zetas"],[1,3,1,"","update_Zetaw"],[1,3,1,"","update_prev"],[1,3,1,"","update_time"]],"simcardems.land_model.Scheme":[[1,2,1,"","analytic"],[1,2,1,"","bd"],[1,2,1,"","fd"]],"simcardems.mechanics_model":[[1,1,1,"","ContinuationBasedMechanicsProblem"],[1,1,1,"","MechanicsProblem"],[1,1,1,"","RigidMotionProblem"],[1,5,1,"","create_problem"],[1,5,1,"","resolve_boundary_conditions"]],"simcardems.mechanics_model.ContinuationBasedMechanicsProblem":[[1,3,1,"","solve"],[1,3,1,"","solve_for_control"]],"simcardems.mechanics_model.MechanicsProblem":[[1,3,1,"","solve"],[1,4,1,"","u_subspace_index"],[1,3,1,"","update_lmbda_prev"]],"simcardems.mechanics_model.RigidMotionProblem":[[1,3,1,"","rigid_motion_term"],[1,4,1,"","u_subspace_index"]],"simcardems.newton_solver":[[1,1,1,"","MechanicsNewtonSolver"],[1,1,1,"","MechanicsNewtonSolver_ODE"]],"simcardems.newton_solver.MechanicsNewtonSolver":[[1,3,1,"","check_overloads_called"],[1,3,1,"","converged"],[1,3,1,"","default_solver_parameters"],[1,3,1,"","register_datacollector"],[1,3,1,"","save_residuals"],[1,3,1,"","solve"],[1,3,1,"","solver_setup"]],"simcardems.newton_solver.MechanicsNewtonSolver_ODE":[[1,3,1,"","update_solution"]],"simcardems.postprocess":[[1,5,1,"","extract_biomarkers"],[1,5,1,"","extract_last_beat"],[1,5,1,"","extract_traces"],[1,5,1,"","find_decaytime"],[1,5,1,"","find_duration"],[1,5,1,"","find_ttp"],[1,5,1,"","get_biomarkers"],[1,5,1,"","json_serial"],[1,5,1,"","make_xdmffiles"],[1,5,1,"","numpyfy"],[1,5,1,"","plot_peaks"],[1,5,1,"","plot_population"],[1,5,1,"","plot_state_traces"],[1,5,1,"","save_popu_json"],[1,5,1,"","stats"]],"simcardems.save_load_functions":[[1,5,1,"","check_file_exists"],[1,5,1,"","decode"],[1,5,1,"","dict_to_h5"],[1,5,1,"","group_in_file"],[1,5,1,"","h5_to_dict"],[1,5,1,"","h5pyfile"],[1,5,1,"","load_initial_conditions_from_h5"],[1,5,1,"","load_state"],[1,5,1,"","mech_heart_to_bnd_cond"],[1,5,1,"","save_state"]],"simcardems.setup_models":[[1,1,1,"","EMState"],[1,1,1,"","Runner"],[1,1,1,"","TimeStepper"],[1,5,1,"","create_progressbar"],[1,5,1,"","setup_EM_model"],[1,5,1,"","setup_ep_solver"],[1,5,1,"","setup_mechanics_solver"]],"simcardems.setup_models.EMState":[[1,2,1,"","coupling"],[1,2,1,"","geometry"],[1,2,1,"","mech_heart"],[1,2,1,"","solver"],[1,2,1,"","t0"]],"simcardems.setup_models.Runner":[[1,3,1,"","create_time_stepper"],[1,4,1,"","dt_mechanics"],[1,3,1,"","from_models"],[1,4,1,"","outdir"],[1,3,1,"","save_state"],[1,3,1,"","solve"],[1,3,1,"","store"],[1,4,1,"","t"],[1,4,1,"","t0"]],"simcardems.setup_models.TimeStepper":[[1,4,1,"","T"],[1,4,1,"","dt"],[1,3,1,"","ms2ns"],[1,3,1,"","ns2ms"],[1,3,1,"","reset"],[1,4,1,"","total_steps"]],"simcardems.utils":[[1,1,1,"","MPIFilt"],[1,1,1,"","Projector"],[1,5,1,"","compute_norm"],[1,5,1,"","enum2str"],[1,5,1,"","float_to_constant"],[1,5,1,"","getLogger"],[1,5,1,"","local_project"],[1,5,1,"","print_mesh_info"],[1,5,1,"","remove_file"],[1,5,1,"","setup_assigner"],[1,5,1,"","sub_function"]],"simcardems.utils.MPIFilt":[[1,3,1,"","filter"]],"simcardems.utils.Projector":[[1,3,1,"","project"]],simcardems:[[1,1,1,"","Config"],[1,1,1,"","DataCollector"],[1,1,1,"","DataLoader"],[1,1,1,"","EMCoupling"],[1,1,1,"","LandModel"],[1,1,1,"","MechanicsNewtonSolver"],[1,1,1,"","MechanicsNewtonSolver_ODE"],[1,1,1,"","MechanicsProblem"],[1,0,0,"-","ORdmm_Land"],[1,1,1,"","RigidMotionProblem"],[1,1,1,"","Runner"],[1,1,1,"","TimeStepper"],[1,0,0,"-","cli"],[1,0,0,"-","config"],[1,0,0,"-","datacollector"],[1,5,1,"","default_parameters"],[1,0,0,"-","em_model"],[1,0,0,"-","ep_model"],[1,0,0,"-","geometry"],[1,0,0,"-","land_model"],[1,0,0,"-","mechanics_model"],[1,0,0,"-","newton_solver"],[1,0,0,"-","postprocess"],[1,0,0,"-","save_load_functions"],[1,0,0,"-","setup_models"],[1,0,0,"-","utils"],[1,0,0,"-","version"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","property","Python property"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:property","5":"py:function"},terms:{"0":[1,2,3,4,15,16,17,18],"00":[2,3],"000000e":2,"001000e":2,"01":[1,2,3],"010000e":2,"014549":2,"015389":2,"02":[1,2,3,4,16],"03":[2,3],"04":[2,3],"05":[1,2,3,17,18],"06":2,"0648726":2,"07":[2,3],"070658":2,"071190":2,"08":[2,3],"084283":2,"09":2,"09a7e5b":2,"0c195ff":2,"1":[0,1,2,3,10,15,16,17,18,19],"10":[2,3,4,6,16],"100":[3,4],"1000":[1,2,4,5,6,11,17,18],"100000e":2,"102":3,"106":3,"11":[2,3],"110":3,"113":3,"113256":2,"118":3,"12":[2,3],"120":3,"120310":2,"123":3,"123788":2,"125":3,"12ad5f2":2,"13":[2,3],"133":3,"1353445":2,"138":2,"14":[2,3,7],"140":1,"144":3,"146":3,"15":[2,3],"150":3,"16":[2,3],"169":3,"17":[2,3,7],"170":3,"172470c":2,"176":3,"18":[2,3],"183":3,"185033":2,"19":[2,3],"1902":15,"192021":2,"193":3,"193711":2,"194":3,"194797":2,"1e":1,"1ed82dc":2,"2":[1,2,3,4,7,10,15,16,17],"20":[1,2,4,17,18],"200":[3,16],"2000":[11,15],"200000e":2,"2004":15,"2009":15,"2011":[3,10],"2014":7,"2017":3,"2022":[2,10],"2023":2,"21":[2,3],"22":[2,3],"226":3,"227464":2,"23":[2,3],"230901":2,"235426":2,"238":3,"24":[2,3],"242":3,"249432":2,"25":[2,3],"250":3,"253291":2,"256714":2,"26":[2,3],"260":3,"262":3,"266":3,"27":[2,3],"276":3,"278001":2,"28":[2,3],"288":3,"29":[2,3],"292":3,"2fe1309":2,"2j":15,"3":[1,2,3,7,15,16],"30":[2,4],"300":3,"300116":2,"301080":2,"31":[2,3],"32":2,"322191d":2,"323":3,"32e43ff":2,"33":[2,3],"333":3,"34":[2,3],"340":3,"3445":15,"3475":15,"35":[2,3],"350":3,"355":3,"357":3,"36":[2,3],"361561":2,"367":15,"37":[2,3],"375":3,"376167c":2,"379999":2,"37fb7d1":2,"38":2,"386":3,"38ad52c":2,"39":[2,3],"396283":2,"3b1d61b":2,"3d":7,"3ed0bc0":2,"4":[0,1,2,3,16],"40":2,"400":3,"41":[2,3],"42":2,"43":[2,3],"430":3,"435":3,"438":3,"44":2,"45":[2,3],"46":[2,3],"460":3,"47":2,"470":3,"48":2,"480":3,"486909":2,"486920":2,"49":[2,3],"491":3,"493":3,"4_":15,"4_f":15,"4cc3e7a":2,"4d3a653":2,"5":[1,2,3,6,17,18],"50":[2,3],"500":3,"5000":2,"500000e":2,"501":15,"503647":2,"51":2,"516":3,"518":3,"52":[2,3],"521974":2,"522":15,"523948":2,"53":3,"539478":2,"54":2,"545":3,"55":[2,3],"552":3,"56":[2,3],"562":3,"566156":2,"57":[2,3],"58":2,"59":2,"592":3,"5992724":2,"5cc1a44":2,"6":[2,3,7,18],"600":3,"603":3,"604":7,"609":3,"61":3,"615":7,"622805":2,"627692":2,"629":3,"63":3,"630ed09":2,"631049":2,"632622":2,"639097":2,"639174":2,"64":3,"648":3,"65":3,"653678":2,"661":3,"673958":2,"675":3,"676635":2,"68":3,"680":3,"686080":2,"688471":2,"68926df":2,"68ae7bb":2,"69503d0":2,"7":[2,3,18],"700":3,"708":3,"711879":2,"713765":2,"72":3,"739dc1c":2,"74":3,"744337":2,"75":3,"750":3,"76":3,"78":3,"781360":2,"785172":2,"794997":2,"8":[2,3],"800":3,"805":3,"81":3,"82":3,"821":3,"83":3,"830650":2,"848278":2,"85":15,"850":3,"8501":[5,9],"86":3,"865697":2,"866361":2,"87":3,"870":3,"8_":15,"8b11e8d":2,"9":[2,3],"900":3,"90b65d3":2,"92":3,"920":3,"93":3,"94":3,"942836":2,"947b107":2,"97e958d":2,"983687":2,"99":3,"999fcfa":2,"9d5c1b1":2,"9d72060":2,"\u00e1":3,"\u00f3":3,"abstract":1,"boolean":4,"c\u00e9cile":10,"case":[3,6,7,15,16,17,18],"class":[1,16],"default":[1,4,9,19],"do":[0,1,3,5,13,16],"enum":1,"final":[6,11,17,18],"float":[1,4],"function":[1,15,16],"import":[2,6,7,11,15,16,17,18],"int":1,"new":[4,5,11,16],"public":0,"return":[1,2,16],"static":1,"super":16,"true":[1,2,6,11,16,17,18],"try":9,"while":[7,15],A:[3,7,15,19],And:16,As:[0,1,3],Being:0,By:[9,19],For:[4,5,7,15,19],If:[0,1,4,5,9,14,16],In:[0,6,7,9,11,16,17,18],It:2,On:14,One:[4,15],The:[0,1,4,6,7,9,10,11,13,15,16,17,18,19],There:7,These:[9,13,19],To:[0,5,7,9,15],_1:15,_2:15,_:15,__file__:[6,11,16,17,18],__init__:16,__main__:16,__name__:16,_a:15,_p:15,_post_mechanics_solv:16,_print_messag:16,_t_releas:16,_time_stepp:16,a3a23b2:2,a4ea024:2,a_:[3,15],a_f:15,ab:[2,15],abc:1,abl:15,about:[6,7,9,11,13,15,17],abov:11,absolut:[2,6,11,16,17,18],abus:0,acamk:3,acap:3,accept:0,account:0,act:0,action:[0,3],activ:[1,6,7,11,14,16,17,18,19],active_model:1,activemodel:1,ad:14,adapt:0,add:[14,16,18],add_trac:2,addit:[0,1],address:0,advanc:0,af:3,afca:3,afcaf:3,aff:3,aforement:12,after:[5,16,19],ag:0,ageo:3,ah:3,ahead:5,ahf:3,ai:3,aif:3,aka:5,alexand:15,alia:1,align:[0,15,16],all:[0,2,4,9,12,13,19],all_hash:2,allo_:3,allow:0,along:15,alreadi:1,also:[0,4,6,7,9,11,12,14,16,17,18,19],altern:[13,14],although:4,alwai:15,amd64:13,among:1,amp:3,an:[0,1,9,13,16],anaconda:14,analysi:11,analyt:[1,2,4,17,18],anca:3,andr:3,andrew:7,angular:15,ani:[0,1,7,10,15],anymor:5,anyth:4,ap:3,api:[10,17],app:5,appear:0,append:2,appl:14,appli:[0,6,16],appoint:0,approach:15,appropri:[0,1,14],apt:14,ar:[0,2,5,6,7,10,12,13,14,15,17,18,19],architectur:13,arg0:1,arg1:1,arg2:1,arg3:1,arg4:1,arg:[1,4],argument:[4,16],arm64:13,arrhythmia:15,as_dict:[1,6,11,17,18],ask:0,ass:3,assert:16,assp:3,assum:4,attack:0,attent:0,autogener:1,automat:[3,9],avail:[0,12],averag:[1,18,19],aw:[1,3],axr:3,axrf:3,b:[1,3,15],b_:[3,15],b_f:15,back:7,background:5,ban:0,bar:4,base:[1,3,4,9,10,12,15,18],basegeometri:1,bcai:3,bcajsr:3,bcamk:3,bcass:3,bd:[1,4],becaus:[2,5],becom:4,been:5,befor:[0,14],begin:[3,15,16],behavior:0,benchmark:[1,4,10],benchmark_fold:2,best:0,better:1,between:[16,19],big:4,biologi:[3,15],biomark:2,biomechan:7,biomed:7,biophys:15,bnd_cond:4,bnd_rigid:[1,17,18],bodi:0,bool:1,both:[0,7,12,13,14,15],boundari:[1,4,16,18],boundarycondit:1,br:2,branch:0,browser:9,bslmax:3,bsrmax:3,bt:3,btp:3,built:[13,14],button:9,c242e33:2,c7df02b:2,c9b3528:2,c:[2,3,14,15],c_m:1,ca:[1,6,11,16,17,18,19],cai:3,cajsr:3,calcium:[6,11,16,17,18,19],calib:3,call:[4,6,7,9,15,16,17,18,19],camka:3,camkb:3,camko:3,camkt:3,can:[0,2,4,5,6,7,9,10,11,12,13,14,15,16,17,18,19],cansr:3,cao:3,cardiac:[1,3,7,12,15],cardiac_geometri:[1,6,11,17,18],cardiaccellmodel:1,cardiolog:3,cardiomyocit:15,cardiomyocyt:3,cass:3,cat_:3,catrpn:3,catrpn_:3,catti:10,cauchi:15,cbcbeat:[1,8,10,12],cc84512:2,cd:[3,14],cdot:15,ce433ea:2,cecil:10,cell:[1,6,7,11],cell_init:1,cell_init_fil:[1,4,11,17,18],cell_param:1,cellmodel:1,celltyp:3,cellular:[7,10,15],center:[2,6,11,16,17,18,19],cf7cc9d:2,chang:[0,2,4,9,11,16],channel:[6,7],character:15,check_file_exist:1,check_overloads_cal:1,checkbox:0,checkout:[0,2],chi:1,chip:14,choic:[13,15],choos:4,ci:14,circumst:0,clarifi:0,classmethod:1,click:[0,9],clone:14,cluster:[4,14],cmdnmax:3,coarser:7,code:[2,4,14],col:2,collabor:0,collect:2,column:2,com:[2,14],come:[14,15],command:[9,10,13,14,19],comment:0,commit:[0,2,14],common:[7,14,15],commun:0,complaint:0,complic:18,compon:7,comput:[3,4,5,7,9],computationalphysiolog:[2,5,6,9,11,13,14,17,18],compute_norm:1,concentr:[6,16,17,18,19],conda:14,condit:[1,4,10,16,18],conduct:6,conf:[1,16],confidenti:0,config:[6,11,16,17,18],configur:[6,11,15,17,18],conflict:0,consequ:7,conserv:15,consid:0,constant:[1,16],constitut:15,construct:0,consult:9,contact:0,contain:[1,4,6,7,9,11,12,13,17,18,19],content:4,continu:[1,2,4],continuationbasedmechanicsproblem:1,contract:[3,7,15],contribut:[10,12,14,15],control:[1,16],converg:[1,7],convers:0,convert:[1,16],copyright:10,core:[1,10],correct:0,correctli:[2,16],correspond:[6,19],could:0,coupl:[1,10,12,15,16],coupling_to_ep:1,coupling_to_mechan:1,coven:0,coverag:0,cpp:1,cpu:14,creat:[0,4,6,9,11,13,14,16,17,18],create_boxmesh:1,create_problem:1,create_progressbar:1,create_slab_facet_funct:1,create_slab_microstructur:1,create_time_stepp:1,creation:19,cristob:3,critic:0,cs:[1,3],csqnmax:3,current:[1,6,11,17,18],custom:[4,6,11,17,18],cw:[1,3],cycl:4,d44db58:2,d:[1,2,3,7],da:3,daemon:5,dap:3,data:[1,2,10],datafram:2,datagroup:1,dataload:1,date:[2,14],daversin:10,dbbec69:2,dcai:3,dcajsr:3,dcamkt:3,dcansr:3,dcass:3,dcatrpn:3,dcd:3,dd:3,debug:4,debug_mod:1,declar:15,decod:1,decompos:15,dedic:[12,14],deem:[0,1],def:[2,16],default_conduct:1,default_initial_condit:1,default_mark:1,default_microstructur:1,default_paramet:1,default_schema:1,default_solver_paramet:1,defaultdict:2,defin:[0,7,15],define_conductivity_tensor:1,deform:15,delet:9,delta:[1,3],delta_:3,demo:[4,18],densiti:15,depend:[7,10,12,16],deriv:15,derogatori:0,describ:[7,11],det:15,detail:[0,2,15],determin:[0,1],dev:14,develop:[3,9,10,12],df9ad53:2,df:[2,3],dfca:3,dfcaf:3,dfcafp:3,dff:3,dffp:3,dh:3,dhf:3,dhl:3,dhlp:3,dhsp:3,di:3,dict:1,dict_to_h5:1,dictionari:1,dif:3,differ:[0,2,6,9,11,17,18],difp:3,direct:[15,19],directli:[0,14],directori:[4,6,9,11,17,18],dirichlet:[1,4,16],disabl:0,discret:7,discretis:7,discuss:[0,7],diseas:[4,11],disease_st:[1,4,17,18],disp:3,displac:[6,11,15,16,17,18],displai:[2,4],dit:5,dj:3,djca:3,djp:3,djrelnp:3,djrelp:3,dki:3,dkss:3,dlambda:[1,3],dm:3,dml:3,dnai:3,dnass:3,dnca:3,docker:[10,12,14],dockerfil:13,document:[0,3],documentaion:10,doe:[1,2],doesn:5,dolfin:[1,16],domain:[1,18,19],don:[0,5],done:[5,9],drop:[16,17,18],drug:[4,10,11],drug_factor:6,drug_factors_fil:[1,4,6,17,18],drug_factors_path:6,ds:1,dss:3,dt:[1,3,4,17,18],dt_mechan:1,dti_:3,dtmb:3,dump:1,durat:3,dure:16,dv:[1,3],dx:[1,3],dxk_:3,dxr:3,dxrf:3,dxs_:3,dxw:3,dzeta:3,dzetaw:3,e1002061:3,e1:3,e36932a:2,e616f0a:2,e8e6d35:2,e99e183:2,e:[0,2,3,4,7,9,14,15,16],e_:3,each:[0,4,6,7,9,11,17,18,19],edc973c:2,edit:[0,14],effect:[10,11],either:[0,1,9],ek:3,electr:7,electromechan:15,electron:0,electrophysiolog:[7,10,12,16],element:[12,15],email:0,emcoupl:[1,3],empathi:0,emploi:15,empti:1,emstat:1,en:8,ena:3,enabl:0,encompass:7,end:[3,4,15,16],energi:[1,15],enforc:15,engin:[7,15],enough:4,ensur:7,enum2str:1,enumcl:1,enumer:[1,2],environ:[0,13],ep:[1,3,4,9],ep_mesh:1,ep_ode_schem:[1,17,18],ep_precondition:[1,17,18],ep_solv:1,ep_theta:[1,17,18],ep_to_coupl:1,epi:3,equat:[2,7,15],equilibrium:15,esac_:3,eta:[1,3],etal:3,ethnic:0,evalu:2,event:0,everyon:0,exampl:[0,4,5,6],excit:15,exec:5,execut:[4,9,13,19],exist:[1,2,4],exit:4,expect:0,experi:0,experiment:3,explicit:0,expr:1,express:[0,1],exterior:1,extern:15,extra:[9,16],extract:19,extract_biomark:1,extract_last_beat:1,extract_trac:1,extract_valu:1,f0:1,f0_ep:1,f5511ff:2,f63afc9:2,f702955:2,f:[1,2,3,15,16],f_:3,face:0,facet:1,factor:[4,6],fail:16,failur:1,fair:0,faith:0,fallingfactori:3,fals:[1,2,16,17,18],fca:3,fcaf:3,fcafp:3,fcap:3,fcass:3,fd:[1,3,4],feedback:7,fenic:[4,10,12],fenics_plotli:9,fenicsproject:14,ff:3,ffp:3,ffun:1,ffun_ep:1,ffun_path:1,fiber:15,fiber_spac:1,ficalp:3,field:[1,16],fig:2,figur:[6,16,17,18,19],file:[1,4,6,9,11,16,17,18],file_exist:1,filemod:1,filenam:1,fill:0,filter:1,finalp:3,finap:3,find:0,find_decaytim:1,find_dur:1,find_ttp:1,finish:0,finit:[12,15],finsberg:10,first:[0,5,9,15,16],fitop:3,fix:[16,18],fix_right_plan:[1,17,18],fjrelp:3,fjupp:3,float_to_const:1,flow:[0,16],fname:1,focus:0,folder:[4,9,13,19],follow:[0,4,5,6,9,11,13,14,17,18],forc:16,forg:14,forget:0,fork:0,formatt:14,formul:3,forward:9,foster:0,found:10,fp:3,frac:[3,15],framework:[12,15],free:0,frequenc:4,from:[0,1,2,3,6,7,9,11,13,14,15,16,17,18,19],from_fil:1,from_geometri:1,from_model:1,fs:[3,15],fss:3,functionspac:1,further:[0,7],futhermor:7,futur:18,g:[3,4],gamma:3,gamma_0:16,gamma_1:16,gammasu:3,gammaw:3,gammawu:3,gender:0,gener:[2,3,18,19],genericmatrix:1,genericvector:1,geo:1,geometri:[4,6,7,10,11,16,17,19],geometry_path:[1,4,6,11,16,17,18],geometry_schema_path:[1,6,11,16,17,18],geq:16,gerhard:15,get:[0,1,9,13,14,16,19],get_biomark:1,get_ylim:2,getlogg:1,ghcr:[5,9,13],git:[0,2,14],git_commit_hash:2,git_hash:2,github:[0,2,6,10,11,13,14,17,18],given:15,gk:3,gk_:3,gkb:3,gkr:3,gna:3,gnal:3,gncx:3,gnu:10,go:[2,9],good:[0,4,9,13],gotran:[1,3],gpca:3,gracefulli:0,gradient:15,graph_object:2,graphic:10,greater:16,green:15,grl1:[1,17,18],group:1,group_in_fil:1,gsac_:3,gto:3,guccion:4,guess:1,gui:4,h5:[4,6,11,16,17,18,19],h5_filenam:1,h5_to_dict:1,h5group:1,h5name:1,h5path:1,h5pyfil:1,h:[2,3],h_:3,ha:[4,5,7,19],half:16,hand:1,handle_cell_init:1,handle_cell_param:1,happen:7,hara:3,harald:7,harass:0,hard:2,harm:0,hash:[2,9],have:[0,5,7,14,16],hca:3,healthi:[1,4,17,18],heart:[1,15],height:2,help:[0,4,5],henrik:10,henriknf:[0,10],herck:10,here:[0,2,6,9,11,15,16,17,18],hf:[1,3],hi:4,hide:4,hide_progress_bar:4,high:[4,7,14],hl:3,hlp:3,hlss:3,hlssp:3,hna:3,ho09:15,hol00:15,holohan:3,holzapfel:15,holzapfelogden:4,home:[9,14],hood:15,hook:14,hovertempl:2,how:[2,4,5,6,9,11,13],howev:2,hp:3,hpc:[4,14],hs:3,hsp:3,hss:3,hssp:3,html:[8,18],http:[0,2,6,8,9,11,14,17,18],human:3,hyperelast:15,i:[1,2,3,7,9,15,16],iF:3,iS:3,i_1:15,i_:15,ic:4,icab:3,icak:3,icana:3,id:9,idea:[9,16],ident:0,ifp:3,ii:15,ik1:3,ik:3,ik_:3,ikb:3,ikr:3,ils:10,ilsbeth:10,imag:[5,14],imageri:0,impact:2,implement:[2,4,7,16],import_tim:2,improv:7,ina:3,inab:3,inaca_:3,inak:3,inal:3,inappropri:0,inc:15,incid:0,includ:[0,12],inclus:0,incompress:15,index:1,indic:4,individu:[0,9],inf:3,info:[4,6,11,15,17,18],inform:[0,7,8],infp:3,init_5000beat:11,init_condit:1,initi:[1,4,10],initial_condit:11,initial_conditions_path:11,input:9,insid:9,instal:[4,5,9],instanc:0,instant:[16,17,18],instead:18,instruct:[13,14],insult:0,integ:4,integr:7,intel:14,interact:0,intercellular:[6,16,17,18],interest:0,interfac:10,intern:16,interpol:7,intracellular:19,inv_lmbda:1,invari:15,investig:0,involv:7,io:[5,6,8,9,11,13,14,17,18],ion:6,ip:3,ipca:3,is_fil:2,isac:3,isac_:3,isclos:2,isinst:16,isol:13,isp:3,iss:3,issu:0,istim:3,item:2,iter:[4,16],iterdir:2,ito:3,its:[0,4],itself:15,j:[3,15],j_:3,jca:3,jdiff:3,jdiffk:3,jdiffna:3,jin:3,jleak:3,jnakk:3,jnakna:3,jncxca_:3,jncxna_:3,joakim:7,john:15,join:2,joinpath:[6,11,16,17,18],jonathan:3,journal:3,jp:3,jrel:3,jrel_:3,jrelnp:3,jrelp:3,json:[2,4,6,11,16,17,18],json_seri:1,jss:3,jtr:3,jup:3,jupnp:3,jupp:3,k1m:3,k1p:3,k2m:3,k2n:3,k2p:3,k3m:3,k3p:3,k3p_:3,k3pp:3,k3pp_:3,k4m:3,k4p:3,k4p_:3,k4pp:3,k4pp_:3,k:3,k_:3,kasymm:3,kb:3,kcaoff:3,kcaon:3,keep:2,kei:2,kentish:3,keyerror:1,khp:3,ki:3,kirchhoff:15,kki:3,kko:3,km2n:3,kmbsl:3,kmbsr:3,kmcaact:3,kmcam:3,kmcamk:3,kmcmdn:3,kmcsqn:3,kmgatp:3,kmn:3,kmtrpn:3,kna_:3,knai:3,knai_:3,knao:3,knao_:3,knap:3,know:15,known:0,ko:3,ksca:3,kss:3,ksu:3,ktrpn:3,ku:3,kuw:3,kw:3,kwarg:1,kwu:3,kxkur:3,l:3,l_x:16,la:1,laboratori:10,lagrang:15,lambda:[3,6,15,16,17,18,19],lambda_:3,land:3,landmodel:1,languag:0,later:10,latest:[8,13,14],law:15,leadership:0,left:[3,10,15],leftventriculargeometri:1,legaci:[12,14],len:2,length:[4,16],leq:3,level:[0,7,10],lgpl:10,librari:[2,17,18],lightweight:9,like:16,limit:11,line:[9,10],linear:15,linear_mechanics_solv:[1,17,18],linear_solv:1,linearis:7,link:[0,2],linter:14,list:[1,2,9],lmbda:[1,3],lmbda_prev:1,load:[2,4,15,18],load_geometri:1,load_initial_conditions_from_h5:1,load_json:1,load_stat:[1,4,11,17,18],loader:1,local_project:1,localhost:9,locat:9,log:[1,3,16],loglevel:[1,4,17,18],look:[4,9],loss:7,lot:9,lower:0,lph:3,lu:1,lv_ellipsoid:18,lx:[1,16],ly:1,lz:1,m:[3,4,5,9,14,19],machin:5,made:0,mai:[0,1],mail:0,main:[1,7,16],maintain:0,make:[0,2,5,15,16,19],make_subplot:2,make_xdmffil:[1,6,17,18],manual:[9,14],mark:0,marker:1,marker_funct:1,marker_path:1,martyn:15,materi:[1,4,15],material_model:1,mathbb:15,mathbf:[15,16],mathcal:3,mathemat:15,mathrm:15,matplotlib:2,max:[1,2,3],max_column:2,mcculloch:7,mean:2,measur:[1,3],mech_heart:[1,16],mech_heart_to_bnd_cond:1,mech_mesh:1,mechan:[1,4,9,12,16],mechanics_mesh:1,mechanics_ode_schem:[1,17,18],mechanics_to_coupl:1,mechanics_use_continu:[1,17,18],mechanics_use_custom_newton_solv:[1,17,18],mechanicsnewtonsolv:1,mechanicsnewtonsolver_od:1,mechanicsproblem:1,mechano:7,media:0,member:0,membran:[1,6,7,16,17,18,19],merg:0,mesh:[1,4,9],mesh_path:1,meshfunct:1,messag:[4,16],method:[0,7,15,16],mgadp:3,mgatp:3,microstructur:1,microstructure_ep:1,microstructure_path:1,middl:16,might:[2,4],millisecond:[1,16],min087:3,min12:3,min:[1,2],ml:3,mlss:3,mode:[3,5],model:[1,4,6,9,10,11,16],modifi:1,modul:[6,8,11,17,18],molecular:[3,15],momentum:15,monodomain:[7,8],monodomainsolv:8,more:[2,6,8,9,11,13,15,17,18],most:[14,16,17],motion:[1,15],mpi:4,mpifilt:1,mpirun:4,ms2n:1,ms:[2,4],mss:3,much:[4,7],multipli:15,mump:[1,17,18],myocardium:15,n0:1,n0_ep:1,n:[2,4,14],nabla:15,nai:3,name:[1,2,3,4,5,13,19],namedtupl:1,nanosecond:[1,16],nao:3,nash:15,nass:3,nation:0,natur:15,nca:3,ndarrai:1,necessari:[0,16,17,18],need:[5,7,9,14],neumann:4,newton:[1,4],newtonsolv:1,next:[6,11,16,17,18],nice:[0,4],nicola:3,nieder:3,nl:1,node:7,non:15,none:[1,4,16,17,18],nonetyp:1,nonlinear:15,nonlinearproblem:1,note:[0,4,5,14,15,16,18],noth:1,novel:3,now:[5,16],np04:15,np:[2,4],ns2m:[1,16],ns:3,ntm:3,ntrpn:3,num_model:1,num_refin:[1,4,17,18],num_stat:1,number:[1,4],numer:7,numpi:[1,2],numpyfi:1,o:[3,4,16],obj:1,object:1,oblig:0,obtain:[4,7],od:[1,4,7,16],off:16,offens:0,offer:4,offici:0,offlin:0,ogden:15,oharaviragvarror11:3,omega:15,onc:[0,4,5,14,16],one:[0,4,7,15,16],onli:[4,14,16,18],onlin:0,open:[0,2,6,9,12,17,18,19],operatornam:3,opposit:16,option:[1,2,4,9,10,12,14],order:[2,5,7,9,16],ordereddict:1,ordmm_land_em_coupl:1,org:0,orient:0,origin:[15,19],os:[1,14],osn:7,other:[0,7,16],otherwis:[0,1,3,4],out:2,outdir:[1,4,6,11,16,17,18],output:[4,6,9,11,16,17,18],over:[2,18,19],overview:0,owner:0,p:[3,5,9,15],p_:3,pace:[1,4,11],packag:[5,9,12,14],page:[0,9],panda:2,panfilov:15,paper:15,parallel:4,param:1,paramet:[1,9,16],parameter_path:1,paraview:[6,17,18],parent:[2,6,11,16,17,18],park:3,part:[10,16],partial:15,particip:0,pass:[0,7],path:[1,2,4,6,11,16,17,18],path_to_result:19,pathlib:[1,2,6,11,16,17,18],pathlik:1,pca:3,pcab:3,pcak:3,pcakp:3,pcana:3,pcanap:3,pcap:3,pcl:[1,4,17,18],pd:2,perform:[4,11,14],perman:0,permiss:0,person:0,pharmacolog:6,phenomena:7,phi:3,phicak:3,phicana:3,philosoph:15,physic:[0,15],piola:15,pip:[9,10,12],pkna:3,place:1,plan:18,pleas:[0,5,6,9,11,17],plo:3,plot:[6,9,11,16,17,18],plot_peak:1,plot_popul:1,plot_state_trac:[1,6,11,16,17,18],plotli:2,plt:2,pnab:3,pnak:3,png:[6,17,18],point:[6,11,17,18],polici:0,polit:0,popu_factors_fil:[1,4,17,18],popul:4,population_fold:1,port:9,posit:[0,16],posixpath:[17,18],possibl:14,post:0,postprocess:[4,6,11,16,17,18,19],potenti:[1,3,6,7,16,17,18,19],ppa:14,pprint:[6,11,17,18],pr:0,pre:[13,14,16],pre_stretch:[1,16,17,18],prebuilt:14,precis:7,precondition:1,preconditioner_typ:1,prefer:13,present:19,previou:[4,14],prima:3,princip:15,print:[2,4,6,11,16,17,18],print_mesh_info:1,privat:0,problem:[1,4],process:7,processor:4,profession:0,progress:[4,15],project:[0,1,10,13],projector:1,properti:[1,4,14],propos:0,provid:[1,4,13,14],psi:15,psi_a:15,psi_p:15,publish:0,pull:13,puls:[1,10,12,15,16],pure:12,purpos:0,pwd:[5,14],pypi:12,pyplot:2,python3:[4,5,9,14,19],python:[4,12,14,17],qca:3,qna:3,quai:14,quantiti:15,question:0,quick:19,quickstart:18,quit:9,r:[1,2,3],race:0,rad:3,radio:9,rai:15,rais:1,raise_on_fals:1,rang:2,rapid:16,rate:11,re:0,read:[0,13],reader:15,readi:0,readthedoc:8,reason:0,rebuild:5,recommend:[4,12,14],recomput:7,record:1,recov:3,redistribut:1,reduc:6,reduct:[1,16,19],reentrant:15,ref:3,refer:14,refin:[1,4],refine_mesh:1,regard:0,regardless:0,regist:1,register_datacollector:1,register_ep_model:1,register_mech_model:1,registri:13,reject:0,rel:3,rel_max_displacement_perc_z:2,relat:15,releas:[10,17,18],release_test_result:16,releaserunn:16,relev:[7,15],reli:4,religion:0,relp:3,remedio:3,remov:0,remove_fil:1,render:0,repercuss:0,repo:[13,14],repolaris:1,report:0,repositori:[0,14],repres:[0,1,7,15],represent:0,requir:[7,9,12,19],rerun:2,research:10,reset:1,reset_st:1,reset_tim:1,residu:1,resolut:7,resolv:0,resolve_boundary_condit:1,resourc:[0,5],respect:[0,15],result:[0,1,2,4,6,11,16,17,18,19],results_:9,results_drug_demo:6,results_fil:[1,2],results_ic_demo:11,results_lv_ellipsoid:18,results_rigid:4,results_simple_demo:[6,17,18],retriev:1,return_interv:1,review:0,right:[0,1,3,15],rigid:[1,4],rigid_motion_term:1,rigidmotionproblem:1,rk_:3,rkr:3,rm:[5,9],robin:4,root:13,row:2,royal:15,rs:3,rudi:3,run:[0,2,4,10,13,14,18],runner:[1,6,11,16,17,18],rw:3,s0:1,s0_ep:1,s:[0,1,3,4,7,15],same:[1,2,4,11,18,19],sander:3,satisfi:15,save:[4,6,17,18,19],save_freq:[1,4,6,11,17,18],save_popu_json:1,save_residu:1,save_st:1,scalabl:4,scale:[4,6],scale_:3,scatter:2,schema:[4,18],schema_path:1,scheme:[1,4,7,17,18],scienc:15,seamlessli:4,section:7,see:[0,1,2,4,6,8,11,16,17,18],select:9,self:[1,16],separ:[0,7,9],set:[0,1,4,14,16,17,18],set_log_level:16,set_materi:[1,4,17,18],setup:[1,9],setup_assign:1,setup_em_model:1,setup_ep_model:1,setup_ep_solv:1,setup_mechanics_solv:1,setup_splitting_solver_paramet:1,sever:7,sexual:0,shall:4,share:14,shared_xax:2,sheet:15,should:[1,5,14],show:[0,2,4,6,11,17,19],show_progress_bar:[1,4,6,11,17,18],showlegend:2,shown:[6,17,18],side:[1,16],signific:7,silicon:14,simcardem:[2,4,5,6,9,10,11,12,13,16,17,18,19],simcardems_vers:2,simcardio:10,simpl:[2,10,18],simul:[2,3,4,6,7,11,16,17,18,19],simula:0,size:[0,1],slab:[2,4,6,11,15,16,17,18,19],slabgeometri:[1,16],slap:16,small:4,smith:3,so:[0,3,5,7,9,16],social:0,societi:15,sodium:6,softwar:[12,14],solid:15,solut:[2,7],solv:[0,1,4,6,11,15,16,17,18],solve_for_control:1,solver:[1,4,7,12,15,16],solver_setup:1,solver_typ:1,some:[0,7,9,16],someth:9,son:15,sor:[1,17,18],sort_valu:2,sourc:[0,1,12,14],space:0,spatial:7,speak:15,special:7,specif:[0,2,15,17,18],specifi:[1,4,6,11,17,18],split:15,splittingsolv:1,spring:[1,4,17,18],sqrt:[3,15],ss:3,st_progress:1,stabil:7,stabl:14,stamp:1,start:[0,6,11,17,18],start_tim:1,stat:1,state:[1,4,6,7,11,16,17,18,19],state_prev:1,state_trac:[6,17,18],step:[1,4,5,6,7,11,17,18,19],steven:3,storag:9,store:[1,9,16,19],str:1,strain:15,streamlit:9,strength:7,stress:[1,15,19],stretch:[6,7,15,16,17,18],string:1,strongli:7,structur:15,studi:15,sub_funct:1,subclass:16,subdomain_data:1,subfold:9,submit:0,subplot:2,subplot_titl:2,subsystem:14,sudo:14,suffix:[1,4],suggest:0,sum:15,sundn:7,support:[13,18],sure:[0,5,16],surfac:1,swap:2,swo:7,system:[1,14,16],szl:3,t0:1,t:[0,1,2,3,4,5,6,11,13,15,16,17,18],t_a:[6,11,15,16,17,18,19],t_releas:16,ta:[1,3],tab:[0,9],take:[0,4,5,9,16],taken:[2,15],tau_:3,taylor:15,td:3,team:0,templat:0,temporari:0,temporarili:0,tension:[3,6,7,11,15,16,17,18,19],tensor:15,test:[0,10,14],text:[2,3,4,16],tf:3,tfca:3,tfcaf:3,tfcafp:3,tff:3,tffp:3,th:3,than:0,thei:0,them:0,therefor:7,theta:1,thf:3,thi:[0,1,3,4,5,6,7,9,11,12,13,15,16,17,18,19],think:7,thl:3,thlp:3,thoma:3,thorvaldsen:7,threaten:0,three:7,threshold:1,through:[0,7,13,16],thsp:3,ti:[3,14],tif:3,tifp:3,time:[1,2,3,4,6,7,9,11,16,17,18],time_stamp:1,time_stepp:1,time_to_max_displacement_z:2,timestamp:2,timestepp:1,tisp:3,tissu:[7,10,19],tj:3,tjca:3,tjp:3,tm:3,tmb:3,tml:3,tmp:3,to_datetim:2,tol:1,tom:7,tot_:3,total:15,total_dof:1,total_step:1,toward:0,tp:3,tr:15,trace:[2,6,11,16,17,18],track:2,traction:[1,4,17,18],transact:15,transmembran:1,tref:3,trigger:[16,17,18],troll:0,troublesom:4,trpn:3,trpn_:3,trpnmax:3,ttot:3,tupl:1,turn:16,tutori:0,two:7,txk_:3,txr:3,txrf:3,txs_:3,type:[1,4,16],u:[1,6,11,15,16,17,18],u_subspace_index:1,ubuntu:14,ufl:1,ui:0,unaccept:0,under:[9,10],underli:16,understand:0,undiseas:3,union:1,unit:15,unlink:1,unwelcom:0,up:[0,1,5,9,14,16],updat:[0,5,14],update_cb:1,update_layout:2,update_lmbda_prev:1,update_prev:1,update_solut:1,update_tim:1,update_yax:2,update_zeta:1,update_zetaw:1,url:9,us:[0,1,3,4,6,8,9,10,11,12,13,14,15,17,18,19],usabl:14,usag:[4,17],use_custom_newton_solv:1,use_n:1,user:[10,14],v:[1,2,3,5,6,11,14,15,16,17,18,19],valid:[1,3],valu:[1,2,3,4,7,16,19],van:10,vari:16,variabl:[1,6,16,17,18,19],variat:1,varr:3,vcell:3,vector:15,ventricular:[3,10],veri:4,verifi:2,version:[0,2,4,10,12,14],vffrt:3,vfrt:3,via:[0,7],view:[6,17,18],viewpoint:0,vir:3,virtual:5,visual:[6,9,10,11,17,18],vjsr:3,vmyo:3,vnsr:3,voltag:[6,11,17,18],volum:1,vs:1,vs_functions_to_dict:1,vss:3,w:[1,14,15],wa:1,wactiv:1,wai:[0,7,11,13,16],wall:7,want:[1,4,5,6,9,11,12,13,14,17,18],warn:[4,16],wca:3,we:[0,2,4,6,7,8,9,11,12,13,14,15,16,17,18],welcom:0,well:0,what:[0,15],when:[0,4,5,16],whenev:2,where:[1,2,9,15,16],which:[0,4,6,7,9,11,12,13,14,15,16,17,18],whiteout:7,who:[0,12],wiki:0,wilei:15,wish:0,within:[0,13],without:[0,4,15],wna:3,wnaca:3,word:[7,16],work:3,workflow:0,would:16,wrap:1,x:[1,2,15,16],x_:3,x_prev:1,xdmf3reader:19,xdmf3readert:19,xdmf:[6,17,18],xk1ss:3,xk_:3,xkb:3,xmdf:19,xr:3,xrf:3,xrss:3,xs1ss:3,xs2ss:3,xs:[1,3],xs_:3,xu:3,xw:[1,3],xw_:3,y:[1,2,15],y_max:2,y_mean:2,y_min:2,yoram:3,you:[0,1,2,4,5,6,9,11,13,14,17,18,19],your:[0,5,9,10],yourself:13,yrang:2,zca:3,zero:16,zeta:[1,3],zetas_prev:1,zetaw:[1,3],zetaw_prev:1,zip:2,zk:3,zna:3},titles:["Contributing","API documentaion","Benchmark","Cellular model","Command line interface","Run using Docker","Drug effects demo","Electro-Mechanical coupling","Tissue level electrophysiology model","Graphical user interface","Simula Cardiac Electro-Mechanics Solver","initial conditions demo","Installation","Install with Docker","Install with <code class=\"docutils literal notranslate\"><span class=\"pre\">pip</span></code>","Tissue level mechanics model","Release test","Simple demo","Left ventricular geometry","Data visualization"],titleterms:{"new":0,activ:15,again:5,api:1,attribut:0,author:10,benchmark:2,between:7,build:13,cardiac:10,cellular:3,cli:1,code:[0,10],command:[4,5],commun:10,condit:11,conduct:0,config:1,contain:5,content:[1,10],contribut:0,contributor:0,coupl:7,creat:[5,19],data:19,datacollector:1,delet:5,demo:[6,10,11,17],develop:14,differ:7,discret:15,docker:[5,9,13],documentaion:1,drug:6,effect:6,electro:[7,10],electrophysiolog:8,em_model:1,enforc:0,ep:7,ep_model:1,execut:5,express:3,fenic:14,file:19,geometri:[1,18],graphic:9,gui:9,guid:0,imag:13,initi:11,instal:[10,12,13,14],interfac:[4,9],land_model:1,left:18,level:[8,15],licens:10,line:[4,5],linux:14,mac:14,mathemat:10,mechan:[7,10,15],mechanics_model:1,mesh:7,model:[3,7,8,15],modul:1,newton_solv:1,node:19,ordmm_land:1,ordmm_land_em_coupl:3,our:0,outsid:9,own:13,paramet:3,paraview:19,passiv:15,pip:14,pledg:0,plot:19,postprocess:[1,9,10],process:0,programm:10,pull:0,refer:[3,7,10,15],releas:16,request:0,respons:0,result:9,run:[5,9],save_load_funct:1,scope:0,script:5,setup_model:1,simcardem:[1,14],simpl:17,simul:9,simula:10,singl:19,softwar:15,solv:7,solver:10,sourc:10,standard:0,start:[5,9],state:3,stop:5,test:16,theori:10,tissu:[8,15],trace:19,transfer:7,us:5,user:9,util:1,variabl:7,ventricular:18,verif:10,version:1,visual:19,window:14,xdmf:19,your:13}})