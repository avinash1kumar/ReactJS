import RightCardContent from "./RightCardContent"

const RightCard = (props) => {
    return (
        <div className="h-full w-70  rounded-4xl overflow-hidden relative shrink-0">
            {/* object-cover */}
            <img className="h-full w-full object-cover" src={props.img}alt="" />
            <RightCardContent serialNo={props.serialNo} tag={props.tag} intro={props.intro}/>
        </div>
    )
}

export default RightCard