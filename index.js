function englishToPersian(){
    var convertedString='';
    var wordLen=document.getElementById('p1').value.length;
    console.log(wordLen);
        for (i=0;i<wordLen;i++){
            switch(document.getElementById('p1').value.substr(i, 1)){
                case '?': 
                    convertedString+= '؟';
                    break;
                case ' ': 
                    convertedString+= ' ';
                    break;
                case 'a':
                if (document.getElementById('p1').value.substr(i+1, 1)=='a'){
                        convertedString+='ا';
                        i++;
                        break;
                }
                    break;
                case 'b':
                    convertedString+='ب';
                    break;
                case 'c':
                    if (document.getElementById('p1').value.substr(i+1, 1)=='h'){
                        convertedString+='چ';
                        i++;
                        break;
                    }
                    convertedString+='ک';
                    break;
                case 'd':
                    convertedString+='د';
                    break;
                case 'e':
                    break;
                case 'f':
                    convertedString+='ف';
                    break;
                case 'g':
                    if (document.getElementById('p1').value.substr(i+1, 1)=='h'){
                        convertedString+='ق';
                        i++;
                        break;
                    }
                    convertedString+='گ';
                    break;
                case 'h':
                    convertedString+='ه';
                    break;
                case 'i':
                    convertedString+='ی';
                    break;
                case 'j':
                    convertedString+='ج';
                    break;
                case 'k':
                    if (document.getElementById('p1').value.substr(i+1, 1)=='h'){
                        convertedString+='خ';
                        i++;
                        break;
                    }
                    convertedString+='ک';
                    break;
                case 'l':
                    convertedString+='ل';
                    break;
                case 'm':
                    convertedString+='م';
                    break;
                case 'n':
                    convertedString+='ن';
                    break;
                case 'o':
                    if (document.getElementById('p1').value.substr(i+1, 1)=='o' || document.getElementById('p1').value.substr(i+1, 1)=='u'){
                        convertedString+='و';
                        i++;
                        break;
                    }
                    if (i==0){
                        convertedString+='ا';
                        break;
                    }
                    else{
                        if(document.getElementById('p1').value.substr(i-1, 1)== ' '){
                            convertedString+='ا';
                            break;
                        }
                    break;
                    }
                case 'p':
                    convertedString+='پ';
                    break;
                case 'q':
                    convertedString+='ک';
                    break;
                case 'r':
                    convertedString+='ر';
                    break;
                case 's':
                    if (document.getElementById('p1').value.substr(i+1, 1)=='h'){
                        convertedString+='ش';
                        i++;
                        break;
                    }
                    convertedString+='س';
                    break;
                case 't':
                    convertedString+='ت';
                    break;
                case 'u':
                    convertedString+='و';
                    break;
                case 'v':
                    convertedString+='و';
                    break;
                case 'w':
                    convertedString+='و';
                    break;
                case 'x':
                    convertedString+='ز';
                    break;
                case 'y':
                    convertedString+='ی';
                    break;
                case 'z':
                    if (document.getElementById('p1').value.substr(i+1, 1)=='h'){
                        convertedString+='ژ';
                        i++;
                        break;
                    }
                    convertedString+='ز';
                    break;
            }
        }        
    document.getElementById('p2').innerHTML=convertedString;
}