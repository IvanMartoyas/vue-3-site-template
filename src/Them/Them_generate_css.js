import {_Utilits} from '@/assets/js/Utilits.js'
import {Them_settings_model} from '@/Them/Them_model'

function create_element(element) {

    return `
        .${element.name_element} {
            font-family: ${element.font.family};
            font-size:   ${element.font.size.value+element.font.size.vlues_type};
            font-weight: ${element.font.weight};
            color: ${element.colors.static.color};
        }
    `;

}
export function generate_css() {
    let them = _Utilits.array_Find_By_Value(Them_settings_model, 'active', true);
    // console.log('Them model',_Utilits.array_Find_By_Value(Them_settings_model, 'active', true));

    var elemets ='';
    them.elements.forEach((element) => {
        // console.log("them.elements", them.elements)
        elemets += create_element(element);
    });

   // console.log('them ',them);
    var style_css = ` //weight family
        body: {
            font-family: ${them.bace_font.family};
            font-weight: ${them.bace_font.weight};
            font-size: ${them.bace_font.size.value+them.bace_font.size.vlues_type};
            color: ${them.colors.base_text_color};
        }
        .container {
            max-width: ${them.layout.container.maxWidth.value+them.layout.container.maxWidth.vlues_type};
        }

        ${elemets}

    `;
    // them.forEach(element => {
        
    // });
    return style_css
}