import { Button } from "react-bootstrap";
import {React,Component} from "react";
import Form from "react-bootstrap/Form";
import '../App.css';

var Equation='equation';
class MatrixInvertion extends Component {
    constructor(){
        super();
        console.log("constructor called");
    }
    componentDidMount(){
        console.log("componentDidMount called");
    }

    getValue() {
        const func = (x) =>{
            var tmp;
            tmp = eval(equation);
            return tmp;
        }

        var xl = document.getElementById("inputXL").value;
        var xr = document.getElementById("inputXR").value;
        var equation = document.getElementById("inputEquation").value;
        var error = document.getElementById("inputError").value;
        var check=0.0,check_xm,check_xr;
        var xm=9999999;
        xl = Number(xl);
        xr = Number(xr);
        Equation=equation;
        
        while(Math.abs(xm-check)>error){
            check = xm;
            xm = (xl+xr)/2;
            check_xm = func(xm);
            check_xr = func(xr);
            if(check_xm*check_xr>0){
                xr = xm;
            }
            else{
                xl = xm;
            }
            console.log(xm);
        }

        document.getElementById("showans").innerHTML=xm;
        document.getElementById("showequation").innerHTML=Equation;

    }

    render() {
        return (
            <div>
                <h1 class="header"><p/>Cramer's Rule</h1>
                <Form>
                    <Form.Group className="mb-3">
                        <div>
                            <h4>Enter Number</h4><p/>
                            <input id="inputEquation" type="text" step="1" placeholder="Equation" class="input-equation"/>
                            <p/>
                            <input id="inputXL" type="number" step="1" placeholder="xL" class="input-number"/>
                            <br/>
                            <input id="inputXR" type="number" step="1" placeholder="xR" class="input-number"/>
                            <p/>
                            <input id="inputError" type="number" step="1" placeholder="Error" class="input-error"/>
                            <p/>
                        </div>
                        <Button onClick={this.getValue}>
                            Submit
                        </Button>
                    </Form.Group>
                </Form>

                    <h4>Equation</h4><div id="showequation"/>
                    <p/>
                    <h4>Root of equation</h4><div id="showans"/>
            </div>
        );
    }
}
export default MatrixInvertion;