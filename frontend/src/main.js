import './app.css';
import jmespath from 'jmespath';

let jmesinput = document.getElementById("jmesinput");
let objectinput = document.getElementById("objectinput");
let jmesoutput = document.getElementById("jmesoutput");
let runit = () => {
  try {
    let parsed = JSON.parse(objectinput.value);
    let jmes = jmespath.search(parsed, jmesinput.value);

    if (typeof jmes == "string") {
      jmesoutput.value = jmes;
    } else {
      jmesoutput.value = JSON.stringify(jmes);
    }
  } catch (e) {
    jmesoutput.value = e;
  }
};
jmesinput.onkeyup = runit;
objectinput.onkeyup = runit;
runit();

