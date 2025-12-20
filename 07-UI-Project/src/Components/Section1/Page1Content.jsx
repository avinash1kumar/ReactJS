import LeftContent from "./LeftContent"
import RightContent from "./RightContent"

const Page1Content = (props) => {
    // console.log(props)
    return (
        <div className="py-3 px-18 h-[85vh]  flex gap-10 ">
            <LeftContent />
            <RightContent user={props.users}/>
        </div>
    )
}

export default Page1Content