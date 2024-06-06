import GetPage from "@/interface/components/data/GetData";

export default function Feats() {

    return (
        <div>
            <GetPage page={"glossary"} pageLim={20} pageNum={0} />
        </div>
    )
}