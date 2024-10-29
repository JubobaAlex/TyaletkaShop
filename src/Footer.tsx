import './Footer.css'
const Footer = () => {
    function showTime() : void {
        const date = new Date();
        const hours : number = date.getHours();
        const minutes : number = date.getMinutes();
        const seconds : number = date.getSeconds();
        
        const element = document.getElementById('time') as HTMLCanvasElement
        element.innerHTML= 'Текущее время: ' + hours + ':' + minutes + ':' + seconds; 
    }   
    setInterval(showTime, 1000);
    return(
        <div>
            <b id="time"></b>
        </div>
    )
}

export default Footer 