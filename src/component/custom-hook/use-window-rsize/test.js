import useWindowResize from "."

export default function TestUseWindowResize(){

const {width,height}=useWindowResize()


    return <div className="contsiner">
<h1>Use  window resize Hook</h1>
<p>width is {width}</p>
<p>height is {height}</p>
    </div>
}