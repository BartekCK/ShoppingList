const today = new Date();

export default ()=>{
    const myDate = new Date();

    myDate.setYear(today.getFullYear());
    myDate.setMonth(today.getMonth());
    myDate.setDate(today.getDay()+14);

    return myDate;
}