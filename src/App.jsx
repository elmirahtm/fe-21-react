import Card from "./Card"
import "./style.css";
const App=()=>{
    return <div className="boxes">
        <Card imagesrc="./photo.png"
        title="kiçik Qruplar"
        description="Dərslər kiçik qruplarda keçirilir, qrupda 4-7 tələbə olur"
        />
    
        <Card imagesrc="./2..png"
        title="Təcrübəli Təlimçilər"
        description="Çox peşəkar və təcrübəli təlimçilərdən dərin bilikləri və geniş təcrübəni əldə etmiş olacaqsınız"
        />
    
    <Card imagesrc="./3..png"
        title="Nəzəriyyə + Praktika "
        description=" Hər gün tədris + hər gün praktiki məşğələ metodu ilə seçdiyiniz sahəsi sürətlə öynəcəksiniz"
        />
       <Card imagesrc="./4..png"
        title="Təcrübə proqramı və Karyera dəstəyir"
        description="Kursu bitirdikdən sonra tələbələrimizi təcrübə proqramı ilə təmin edirik və iş həyatına tez başlamaları üçün əməkdaşlıq etdiyimiz şirkətlərə yönəldirik"
        />
    
    <Card imagesrc="./5..png"
        title="Ödənişsiz Sınaq Dərsləri"
        description="Sınaq dərslərimizdə heç bir ödəniş etmədən iştirak edib, tədrisimizin keyfiyyətini dəyərləndirə bilərsiniz"
        />
    
    <Card imagesrc="./8..png"
        title="Əyani və Online dərslər"
        description="Dərimizdə istər əyani, həm online formatda iştirak edə bilərsiniz"
        />
    
    <Card imagesrc="./7..png"
        title="Dərslərin Video Yazıları"
        description="Hər dərsdən sonra həmin dərsin video yazılarını əldə edəcəksiniz və istədiyiniz zaman həmin yazılara təkrar baxaraq, unutduğunuz mövzuları"
        />
    
    <Card imagesrc="./8..png"
        title="Zəmanət Veririk"
        description="Tədrisimizə tam zəmanət veririk: əgər hər hansı mövzu və ya mövzular sizə tam aydın olmasa, həmin dərsləri sizə təkrar keçəcəyik

        "
        />
    
    </div>
}
export default App