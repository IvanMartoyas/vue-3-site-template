import {Vlues_type, Weight, Default_font} from '@/Them/Enum_types.js'
// Colors_palettes_1 потом поменять на просто цветавую палитру
const Colors_palettes_dark = {
    primmery: '#F54B64',
    secondary: '#FFD428',
    darck: '#4e586E',
    white: '#fff',
    active: true,
}
const Colors = {
    DARCK: {
        them_colors_palettes: Colors_palettes_dark,      
        background: {
            bg_site:   Colors_palettes_dark.secondary,
            bg_header: Colors_palettes_dark.secondary,
            bg_footer: Colors_palettes_dark.secondary,
        },
        base_text_color: Colors_palettes_dark.white,
        link: {
            static: {
                color: Colors_palettes_dark.white,
                background: '',
            },
            hover: {
                color: '',
                background: '',
            },
            active: {
                color: '',
                background: '',
            },
        }
    },
    LIGHT: {
        them_colors_palettes: {
            primmery: '#F54B64',
            secondary: '#FFD428',
            darck: '#4e586E',
            white: '#fff'
        },      
        background: {
            bg_site: '',
            bg_header: '',
            bg_footer: '',
        },
        link: {
            static: {
                color: '',
                background: '',
            },
            hover: {
                color: '',
                background: '',
            },
            active: {
                color: '',
                background: '',
            },
        }
    }
}
class _Element {

    name_element = 'default';

    font = {
        family: Default_font.FAMILY,
        weight: Default_font.WEIGHT,
        size: {
            value: Default_font.SIZE,
            vlues_type: Default_font.VLUES_TYPE
        }
    }

    colors = {
        static: {
            color: '',
            background: '',
        },
        hover: {
            color: '',
            background: '',
        },
    }

    margin = {
        left: {
            value: 0,
            vlues_type: Vlues_type.REM,
        },
        right: {
            value: 0,
            vlues_type: Vlues_type.REM,
        },
        top: {
            value: 0,
            vlues_type: Vlues_type.REM,
        },
        bottom: {
            value: 0,
            vlues_type: Vlues_type.REM,
        },
    }
    padding = {
        left: {
            value: 0,
            vlues_type: Vlues_type.REM,
        },
        right: {
            value: 0,
            vlues_type: Vlues_type.REM,
        },
        top: {
            value: 0,
            vlues_type: Vlues_type.REM,
        },
        bottom: {
            value: 0,
            vlues_type: Vlues_type.REM,
        },
    }

    constructor(data) { 
        this.name_element = data.name_element;
        
        this.font.family = data.family || Default_font.FAMILY;
        this.font.weight = data.weight || Default_font.WEIGHT;
        this.font.size.value = data.font.size || Default_font.SIZE;
        this.font.size.vlues_type = data.font.vlues_type || Default_font.VLUES_TYPE;
        
        this.colors.static.color = data.colors.color || Colors.base_text_color;

       // console.log("font type ",this.font.size.vlues_type)

        // if(data.margin != null) {
        //     console.log("true")
        // } else {
        //     console.log("false")
        // }
        
    }
}

const Paragraf = new _Element({name_element: 'p'    ,font: {size: 1,   vlues_type: Vlues_type.REM}, weight: Weight[300], colors: {color: Colors.DARCK.them_colors_palettes.white}, family: 'Roboto'});
const Span = new     _Element({name_element: 'span' ,font: {size: 0.8, vlues_type: Vlues_type.REM}, weight: Weight[300], colors: {color: Colors.DARCK.them_colors_palettes.white}});
const H1 = new       _Element({name_element: 'H1'   ,font: {size: 3.5, vlues_type: Vlues_type.REM}, weight: Weight[800], colors: {color: Colors.DARCK.them_colors_palettes.white}});
const H2 = new       _Element({name_element: 'H2'   ,font: {size: 3.1, vlues_type: Vlues_type.REM}, weight: Weight[700], colors: {color: Colors.DARCK.them_colors_palettes.white}});
const H3 = new       _Element({name_element: 'H3'   ,font: {size: 2.8, vlues_type: Vlues_type.REM}, weight: Weight[600], colors: {color: Colors.DARCK.them_colors_palettes.white}});
const H4 = new       _Element({name_element: 'H4'   ,font: {size: 2.5, vlues_type: Vlues_type.REM}, weight: Weight[600], colors: {color: Colors.DARCK.them_colors_palettes.white}});
const H5 = new       _Element({name_element: 'H5'   ,font: {size: 2.3, vlues_type: Vlues_type.REM}, weight: Weight[600], colors: {color: Colors.DARCK.them_colors_palettes.white}});
const H6 = new       _Element({name_element: 'H6'   ,font: {size: 1.8, vlues_type: Vlues_type.REM}, weight: Weight[600], colors: {color: Colors.DARCK.them_colors_palettes.white}});
const Link = new     _Element({name_element: 'a'    ,font: {size: 1,   vlues_type: Vlues_type.REM}, weight: Weight[300], colors: {color: Colors.DARCK.them_colors_palettes.white}});

export const Them_settings_model = [
    {
        name: 'По умолчанию',
        slug: 'default',
        active: true,

        layout: {
            container: {
                maxWidth: {
                    value: 1200,
                    vlues_type: Vlues_type.PX,
                },
                // content: {
                //     value: 1200,
                //     vlues_type: Vlues_type.PROCENT,
                // },
                // sitbar: {
                //     value: 1200,
                //     vlues_type: Vlues_type.PROCENT,
                // }
            },
        },
        bace_font: {
            family: Default_font.FAMILY,
            weight: Default_font.WEIGHT,
            size: {
                value: Default_font.SIZE,
                vlues_type: Default_font.VLUES_TYPE
            }
        },
        colors: {
            ...Colors.DARCK
        },
        elements: [ // страндартные настройки по умолчанию
            Paragraf,
            Span,
            H1,
            H2,
            H3,
            H4,
            H5,
            H6,
            Link,
        ]
    },
    {
        name: 'test 1',
        slug: 'test1',
        active: false,
    },
    {
        name: 'test 2',
        slug: 'test2',
        active: false,
    }
]