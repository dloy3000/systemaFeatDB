import Image from "next/image";
import styles from "./page.module.css";
import TechBox from "@/interface/tiles/card/TechBox";
import CardBox from "@/interface/tiles/card/CardSet";

export default function Home() {
  return (
    <div>
      <TechBox title={"Power On!"} text={
        <div>
          <h1>h1</h1>
          <h2>h2</h2>
          <h3>h3</h3>
          <h4>h4</h4>
          <h5>h5</h5>
          <h6>h6</h6>
          <p>
            This is a text box with cool stuff in it.
          </p>
        </div>
      } imgSrc={"https://static.wikia.nocookie.net/monsterhunter/images/4/49/MHW-Great_Sword_Equipment_Render_001.png"}
        boxSize={"140px"} />
      <TechBox title={"SAMPLE TITLE"} text={
        <div>
          <h1>h1</h1>
          <h2>h2</h2>
          <h3>h3</h3>
          <h4>h4</h4>
          <h5>h5</h5>
          <h6>h6</h6>
          <p>
            This is a text box with cool stuff in it.
          </p>
        </div>
      } imgSrc={""}
        boxSize={"400px"} />
      <TechBox title={"SAMPLE TITLE"} text={
        <div>
          <h1>h1</h1>
          <h2>h2</h2>
          <h3>h3</h3>
          <h4>h4</h4>
          <h5>h5</h5>
          <h6>h6</h6>
          <p>
            This is a text box with cool stuff in it.
          </p>
        </div>
      } imgSrc={""}
        boxSize={"400px"} />
      <TechBox title={"SAMPLE TITLE"} text={
        <div>
          <h1>h1</h1>
          <h2>h2</h2>
          <h3>h3</h3>
          <h4>h4</h4>
          <h5>h5</h5>
          <h6>h6</h6>
          <p>
            This is a text box with cool stuff in it.
          </p>
        </div>
      } imgSrc={""}
        boxSize={"400px"} />
      <TechBox title={"SAMPLE TITLE"} text={
        <div>
          <h1>h1</h1>
          <h2>h2</h2>
          <h3>h3</h3>
          <h4>h4</h4>
          <h5>h5</h5>
          <h6>h6</h6>
          <p>
            This is a text box with cool stuff in it.
          </p>
        </div>
      } imgSrc={""}
        boxSize={"400px"} />
      <TechBox title={"SAMPLE TITLE"} text={
        <div>
          <h1>h1</h1>
          <h2>h2</h2>
          <h3>h3</h3>
          <h4>h4</h4>
          <h5>h5</h5>
          <h6>h6</h6>
          <p>
            This is a text box with cool stuff in it.
          </p>
        </div>
      } imgSrc={""}
        boxSize={"400px"} />
    </div>
  );
}
