import Header from "./Components/Header"
import Box from "./Components/box";

const App=()=>{
    return(
           <div className="header"> <Header/>
        <div className="boxes">
            <Box 
             title="Portfolio hazırlanması"
            disc="Kurs və Təcrübə proqramı ərzində hazırlayacağınız layihələri Portfolionuza və CV-nizə yerləşdirə biləcəks"
            
            />
            <Box
             title="CV məsləhətləri və yönləndirmə"
            disc="CV hazırlanması üzrə məsləhət veririk və hazır CV-nizi partnyor şirkətlərə təcrübə və iş üçün yönəldiri"
            
            />
            <Box
             title="İntervyu məsləhətləri"
            disc="Sizə iş təklif edən şirkət ilə intervyu üçün hazırıayacayıq: özünüzü intervyuda necə aparmalısınız, suallara necə cavab verməlisiniz və digər məsləhətlər"
            
            />
            <Box
            title="İş üçün yönləndirmə"
            disc="Kursu bitirdikdən sonra dərhal işə başlamaq çox önəmlidir. Bu məsələdə də biz sizə yardımçı olacağıq: iş imkanı üçün sizi əməkdaşlıq etdiyimiz şirkətlərə yönəldəcəyik"
            
            />
            <Box
             title="Təcrübə proqramı"
            disc="Siz kursumuzun məzunu olduqdan sonra sizi təcrübə proqramı ilə təmin edəcəyik və ya təcrübə üçün partnyor şirkətlərə yönəldəcəyik"
            
            />
            <Box
             title="Texniki dəstək"
            disc="Kurslarımızı bitirdikdən sonra belə biz 6 ay ərzində sizin yanınızda olacayıq. Əgər siz işə düzəldiyiniz şirkətdə hər hansı texniki çətinliklə üzləşsəniz, təlimçilərimiz sizə dəstək göstərəcəklər"
            
            />
        </div>
        </div>
    )
}
export default App;