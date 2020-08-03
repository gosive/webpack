
const ripple    = require ('../components/ripple/ripple')
const leftNav   = require ('../components/leftNav/leftNav')
const bottomNav = require ('../components/bottomNav/bottomNav')
const tab       = require ('../components/tab/tab')
const snack     = require ('../components/snack/snack')
const sideSheet = require ('../components/sideSheet/sideSheet')
const bodyBar   = require ('../components/bodyBar/bodyBar')
const banner    = require ('../components/banner/banner')
const textfield = require ('../components/textfield/textfield')

const drawer    = require ('../components/drawer/drawer')
const fullCont  = require ('../components/fullCont/fullCont')
const menu      = require ('../components/menu/menu')
const dialog    = require ('../components/dialog/dialog')
const backdrop  = require ('../components/backdrop/backdrop')

const {body}    = require ('../components/body/body')
const dt        = require ('../components/dt/dt')
const appbar    = require ('../components/appbar/appbar')

///////////////PUNCH
const schedcard    = require ('../components-punch/sched-card/sched-card')
const punchin      = require ('./punch/punchin')


const click = document.body.addEventListener('click',function(ev){
    
    ev.stopPropagation();

    const classes = ev.target.className
    const spliter = classes.split(" ") //Get elem all class
    
    if (spliter == ""){
         if (ev.target.tagName == 'TD'){
             p_dt('td', ev)
             return
         }
    }

    spliter.forEach((element)=>{//anlyce each class
      if(element.startsWith('Lc_')) { //Only Lc_ → are allowed
        let arr  = element.split('_')
        call(arr[1], arr[2], ev)
      }
    })

 }, true);



function call(module, func, ev){
  // console.log('ulala')
   // console.log('module', module, 'func', func)  
    switch (module){
        case 'ripple':          ripple.show(ev);              break; 
        case 'appbar':          p_appbar(func, ev);           break;   
        case 'dt':              p_dt(func, ev);               break;   
        case 'drawer':          p_drawer(func, ev);           break; 
        case 'scrim':           p_scrim(func, ev);            break; 
        case 'leftNav':         leftNav.mov(ev);              break; 
        case 'bottomNav':       bottomNav.mov(ev);            break; 
        case 'sideSheet':       p_sideSheet(func, ev);        break; 
        case 'bodyBar':         p_bodyBar(func, ev);          break;
        case 'snack':           p_snack(func, ev);            break;
        case 'dialog':          p_dialog(func, ev);           break;
        case 'chip':            p_chip(func, ev);             break;
        case 'tab':             tab.mov(ev);;                 break;
        case 'textfield':       p_textfield(func, ev);;       break;
        case 'banner':          banner.hide(ev);;             break;
        case 'menu':            p_menu(func, ev);             break;
        case 'fullcont':        p_fullcont(func, ev);         break;
        case 'backdrop':        p_backdrop(func, ev);         break;
        case 'them':            body.classList.toggle('darkTheme');            break;


///////////////PUNCH
        case 'schedcard':        p_schedcard(func, ev);      break;   

    }
}



///////////////PUNCH
function p_schedcard(func, ev){
  console.log('p_schedcardxxx', func)

    switch (func){
        case 'active':           cardActive(ev);       break;         
        case 'punchBtn':         punchBtn(ev);         break; //btn card         
        case 'punchInBtn':       punchInBtn(ev);       break; //btn fullCont        

    }    
}



///////////////****************
function p_backdrop(func, ev){ //handle very click on any scrim
  // console.log('func',func, ev.target)
    switch (func){
        case 'show':            backdrop.show(ev);       break;         
        case 'hide':            backdrop.hide(ev);       break;  
    }    
}


 //handle very click on any scrim and hide the serving elements
function p_scrim(func, ev){

    switch (func){
       
        case 'dialog':            dialog.hide();                break;  
        case 'menu':              menu.hide();                  break;  
        
        case undefined: //
             switch (ev.target.getAttribute('data-serving') ){//share the main scrim
   
                     case 'backdrop':            backdrop.hideScrim(ev);     break;  
                     case 'fullCont':            fullCont.hideScrim(ev);   break;             
                     case 'drawer':              drawer.hide();            break;  
            }
    }    
}

function p_chip(func, ev){
    switch (func){        
        case undefined :  ev.target.classList.toggle('selected');
    }    
}

function p_snack(func, ev){
    switch (func){
        case 'show':            snack.show();       break;         
        case 'hide':            snack.hide();     break;          
    }    
}

function p_menu(func, ev){
    switch (func){
        case 'show':            menu.show(ev);       break;         
        case 'hide':            menu.hide();       break;          
    }    
}

function p_fullcont(func, ev){ //ev here is the id of the fullcont
  
    switch (func){
         case 'show':            fullCont.show(ev);     break;  
         case 'hide':            fullCont.hide(ev);     break;  
         case 'hideScrim':       fullCont.hideScrim(ev);     break;  


    }    
}

function p_textfield(func, ev){
    switch (func){
        case 'clear':        textfield.clear(ev);     break; 
    }    
}

function p_dialog(func, ev){
    switch (func){
         case 'show':            dialog.show();     break; 
         case 'hide':            dialog.hide();     break;   
    }    
}

function p_sideSheet(func, ev){
    switch (func){
        case 'show':            sideSheet.show();    break;   
        case 'hide':            sideSheet.hide();    
                                bodyBar.deselect();
                                                    break;   
    }    
}

function p_bodyBar(func, ev){
            sideSheet.show();
            bodyBar.mov(ev)       
       
}

function p_drawer(func, ev){
    switch (func){
          case 'show':   drawer.show();     break;  
          case 'hide':   drawer.hide();     break;    
    }    
}

function p_appbar(func, ev){
    switch (func){
        case 'showSecond':       appbar.showSecond(ev);     break;   
        case 'hideSecond':       appbar.hideSecond(ev);     break;   

    }    
}




function p_dt(func, ev){
   // console.log(' p_dt func, ev', func, ev)

    switch (func){
        case 'typing':       dt.typing(ev);     break;   
        case 'clear':        dt.clear(ev);      break;   
        case 'th':           dt.th(ev);         break;   
        case 'td':           dt.td(ev);         break;   
        case 'chk':          dt.checkbox(ev);   break;   
        case 'searching':    dt.searching(ev);  break;   
        case 'checkboxTr':   dt.checkboxTr(ev); break;   
        case 'test':         dt.test(ev);       break;  
       // case 'more':         scrim.show(ev,'menu');       break;  
    }    
}



module.exports = {click:click}
