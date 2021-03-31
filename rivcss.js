$(document).ready ( function(){


    function ScrollToTop() {
      // document.body.scrollTop = 0; // For Safari
      // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

window.scrollTo({top: 0, behavior: 'smooth'});
    }

    scrollToTopEls = document.getElementsByClassName("scroll-to-top");
    for(let i = 0; i < scrollToTopEls.length; i++){
        var el = scrollToTopEls[i];
        el.addEventListener("click", ScrollToTop);
    }

    els=document.getElementsByClassName("rivcss");
    console.log(els);
    for(let i = 0; i < els.length; i++){
        var el = els[i];
        console.log(els[i]);

        elclass=el.classList;
        console.log(elclass);
        evaluation = '';
        prevEvaluation = 0;
        evaluationClass = 0;
        console.log(elclass.length);
        var border_radius_synonyms=[
            'border-radius',
            'border-r',
            'br',
        ];
        var selection_bg_color=[
            'selection-bg-color',
        ];
        var selection_color=[
            'selection-color',
        ];
        var border_left_synonyms=[
            'border-l',
            'border-line-l'
        ];
        var array=[
                'color',
                'bg-color',
        ];
        var allarray=[
            '*selection-bg-color'
        ];
        array = [].concat(array,border_radius_synonyms);
        array = [].concat(array,border_left_synonyms);
        array = [].concat(array,selection_bg_color);
        array = [].concat(array,selection_color);
        array = [].concat(array,allarray);
        for (const key in elclass) {
                // console.log(`${key}: ${elclass[key]}`);
    // console.log;
                if(array.includes(elclass[key])){
                    evaluation = elclass[key];
                    console.log(elclass[key]+" class found");
                    prevEvaluation = evaluationClass;
                }


                if(evaluationClass == prevEvaluation + 1){
                    console.log('evaluation of ' + evaluation+' started');
                    console.log("custom-value found");
                    console.log(elclass[key]);

                    if(evaluation == 'color'){
                        el.style.color=elclass[key];
                    }
                    if(evaluation == 'bg-color'){
                        el.style.backgroundColor=elclass[key];
                    }
                    if(border_radius_synonyms.includes(evaluation)){
                        el.style.borderRadius=elclass[key];
                    }
                    if(border_left_synonyms.includes(evaluation)){
                        el.style.borderLeft=elclass[key];
                        if(elclass[key].includes('`')){
                            var val = elclass[key];
                            val=val.replaceAll('`','');
                            val=val.replaceAll('_',' ');
                            el.style.borderLeft=val;
                            console.log(val);
                        }
                    }
                    if(selection_bg_color.includes(evaluation)){
                        // el.style.cssText="::selection{background-color:"+ elclass[key] + ";}"
                        // console.log()
                        var id = el.id;
                        console.log(id);
                        console.log("#" + id);
                        var sheets = document.styleSheets; // returns an Array-like StyleSheetList
                        // Grab the first sheet, regardless of media
                        var sheet = document.styleSheets[3];
                        console.log(sheet);
                        sheet.insertRule("#"+id+"::selection{background-color:"+elclass[key]+";}");
                        // sheet.addRule("#"+id+"::selection","color:"+elclass[key]+";",1);

                        // $("#"+id).select();
                    }
                    if(selection_color.includes(evaluation)){
                        // el.style.cssText="::selection{background-color:"+ elclass[key] + ";}"
                        // console.log()
                        var id = el.id;
                        console.log(id);
                        console.log("#" + id);
                        // $("#"+id).addClass("selection-color1");

                        var sheets = document.styleSheets; // returns an Array-like StyleSheetList
                        // Grab the first sheet, regardless of media
                        var sheet = document.styleSheets[3];
                        console.log(sheet);
                        sheet.insertRule("#"+id+"::selection{color:"+elclass[key]+";}");
                        // sheet.addRule("#"+id+"::selection","color:"+elclass[key]+";",1);

                    }
                    if(allarray.includes(evaluation)){
                        var sheets = document.styleSheets; // returns an Array-like StyleSheetList
                        // Grab the first sheet, regardless of media
                        var sheet = document.styleSheets[3];
                        console.log(sheet);
                        sheet.insertRule("::selection{background-color:"+elclass[key]+";}");

                    }
                }

                evaluationClass++;
        }

    }
});
