class module_sub_category {
        constructor(name, parent) {
                this.name = name;
                this.parentCategory = parent;
        }
}

//create your subcategorys here:
let misc_Subcategory = new module_sub_category("misc", "misc");
let tab_Subcategory = new module_sub_category("tab", "misc");
let membean_Subcategory = new module_sub_category("membean", "quiz");
let paperclips_Subcategory = new module_sub_category("paperclips", "games");


const module_categorys = [
        "misc",
        "quiz",
        "games"
]
const module_sub_categorys = [
        misc_Subcategory,
        tab_Subcategory,
        membean_Subcategory,
        paperclips_Subcategory
]


//constructs all the elements into one and builds the client
function buildHMSClient() {
        let x = document.createElement('div');
        x.id = "HMSClientWindow"
        x.style.padding = "5px;";
        x.style.background = "#525252";
        x.style.border = "solid";
        x.style.borderWidth = "1px";
        x.style.position = "absolute";
        x.style.top = "20px";
        x.style.left = "20px";
        x.style.zIndex = "999999";
        document.body.appendChild(x);
        document.getElementById("HMSClientWindow").appendChild(newDiv("HMSClientWindow-header"))
        document.getElementById("HMSClientWindow-header").innerHTML = "HMS Client";
        document.getElementById("HMSClientWindow-header").style.cursor = "move";
        document.getElementById("HMSClientWindow-header").style.color = "#FFF";
        dragElement(document.getElementById("HMSClientWindow"));
        //creates the categories:
        for(i=0;i<module_categorys.length;i++) {
                document.getElementById("HMSClientWindow").appendChild(newDiv(module_categorys[i] + "-category"));
                document.getElementById(module_categorys[i] + "-category").appendChild(newDiv(module_categorys[i] + "-categoryHeader", '<font color="lime">' + module_categorys[i] + '</font>'))
                let br = document.createElement('div');
                br.style.background = "rgb(0, 0, 0, 1)";
                br.style.height = "10px";
                document.getElementById("HMSClientWindow").appendChild(br);
        }
        //creates the subcategories:
        for(i=0;i<module_sub_categorys.length;i++) {
                document.getElementById(module_sub_categorys[i].parentCategory + "-category").appendChild(newDiv(module_sub_categorys[i].name + "-subCategory"))
                document.getElementById(module_sub_categorys[i].name + "-subCategory").appendChild(newDiv(module_sub_categorys[i].name + "-subCategoryHeader", '<font color="green">' + module_sub_categorys[i].name + '</font>'));
        }
        //insertes all the modules in their designated subcategory:
        for(i=0;i<modules.length;i++) {
                document.getElementById(modules[i].getModuleCategory() + "-subCategory").appendChild(newButton((modules[i].getModuleId()), (modules[i].getModuleName()), i, modules[i].getModuleTooltip()));
                let br = document.createElement('br');
                document.getElementById(modules[i].getModuleCategory() + "-subCategory").appendChild(br);
        }

        /*
        for(i=0;i<modules.length;i++) {
                document.getElementById("HMSClientWindow").appendChild(newButton((modules[i].getModuleId()), (modules[i].getModuleName()), i));
                let br = document.createElement('br');
                document.getElementById("HMSClientWindow").appendChild(br);
        }*/
}

//allows the window to be draggable:
function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "-header")) {
          // if present, the header is where you move the DIV from:
          document.getElementById(elmnt.id + "-header").onmousedown = dragMouseDown;
        } else {
          // otherwise, move the DIV from anywhere inside the DIV:
          elmnt.onmousedown = dragMouseDown;
        }
      
        function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          // get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
        }
      
        function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          // set the element's new position:
          elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
          elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
      
        function closeDragElement() {
          // stop moving when mouse button is released:
          document.onmouseup = null;
          document.onmousemove = null;
        }
      };
      



//let shouldInject = false;
/* var client_injection_check = setInterval(
        function() {
                const client_files_list = [
                        ModuleManager_Loaded,
                        ModuleInitalizer_Loaded,
                        BuildTools_Loaded,
                
                        //modules:
                        MembeanAC_Loaded,
                        TabFreeze_Loaded
                ]
                let loaded_files_count_true = 0;
                let loaded_files_count_false = 0;
                if(shouldInject == false) {
                        for(i=0;i<client_files_list;i++) {
                                if(client_files_list[i] == true) {
                                        loaded_files_count_true++;
                                        console.log("logged true file")
                                } else {
                                        loaded_files_count_false++;
                                }
                        }
                        if(loaded_files_count_false < 0) {
                        } else {
                                shouldInject = true;
                        }
                } else {
                        clearInterval(client_injection_check);
                        initModules();
                        buildHMSClient();
                }
        }, 500
)*/