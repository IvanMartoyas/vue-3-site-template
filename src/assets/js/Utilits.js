// utilist это вспомогательный клас
/* обзор методов

debug ture включает режим отладки, по умолчанию false

1 перевод текста в английское написание translit(text), на вход принимает сторку на русском
2 поиск элемента из полей обьекта по заданному значению array_Find_By_Value(array, name, value), 
на вход принимает массив обьектов (JSON), а также название искомого поля и его значения
3 поиск элемента из массива по id array_Find_By_Id(array, id), на вход принимает массив и id
4 удаление элемента из массива по id - array_Delete_By_id(array, id), на вход принимает массив и id

*/
class Utilits {
    debug;

    super() {
        this.debug = false;
    }

    translit(word){// делает перевод текста на английский
        try {
            let answer = '';
            let converter = {
                'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
                'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
                'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
                'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
                'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
                'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
                'э': 'e',    'ю': 'yu',   'я': 'ya',
        
                'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
                'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
                'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
                'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
                'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
                'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
                'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
            };
        
            for (let i = 0; i < word.length; ++i ) {
                if (converter[word[i]] == undefined){
                    answer += word[i].replace(' ', '_');
                } else {
                    answer += converter[word[i]].replace(' ', '_');
                }
            }
            return answer;
        
        } catch (e){ 
            if(this.debug) console.log(" translit function error: ", e)
        }

      
    }

    array_Find_By_Value(array, name, value) {
        try {

            var finding_result;
            
            array.filter((item) => {

                if(item[name] == value) {
                    finding_result = item;
                }

            })
            return finding_result;

        } catch (e){ 
            if(this.debug)  console.log(" array_Find_By_Value function error: ", e)
        }
    }

    array_Find_By_Id(array, serach_id) {
        try {
            return array.filter(item => item.id == serach_id);
            
        } catch (e){ 
            if(this.debug)  console.log(" array_Find_By_Id function error: ", e)
        }
    }

    array_Delete_By_id(array, delete_id){ 
        try {
            let finding = array.filter(item => item.id !== delete_id);
            return finding;

        } catch (e){ 
            if(this.debug)  console.log(" array_Delete_By_id function error: ", e)
        }

    }


}
export const _Utilits = new Utilits()
// utilits.debug = true;

// let str = "Русская рулетка"
// console.log("utilits.translit(str) ",utilits.translit(str))