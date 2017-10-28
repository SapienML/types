import { suite, test, slow, timeout } from "mocha-typescript";
import * as assert from "assert" ;
import { Dense } from '@layers';
// import { hello } from '../src/index';
@suite class Test{
    @test testHello(){
        var d = new Dense()
        console.log("created Dense layer ")
        console.log("feeding Dense layer")    
        let layer1: Dense = new Dense(); 
    }
}