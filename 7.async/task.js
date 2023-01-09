class AlarmClock{
    constructor(){
        this.alarmCollection = [{
            time: "00:00",
            callback: () => console.log ('звонок'),
            canCall: true,

        }];
        this.intervalId === null;
    }

    addClock (time, callback){
        if (!time || !callback){
            throw new Error('Отсутствуют обязательные аргументы')
        }
        
        if (this.alarmCollection.some(alarm => alarm.time === time)){
            console.warn('Уже присутствует звонок на это же время')
        }

        this.alarmCollection.push({time, callback, canCall: true });
    }

    removeClock(time){
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time)
    }
}