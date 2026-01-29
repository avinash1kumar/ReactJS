import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'


const RightContent = (props) => {
    // console.log(props.user[0].tag)
    return (
        <div id='right' className="h-full w-3/1 flex flex-nowrap gap-10 p-4 overflow-x-auto rounded-4xl ">
            {/* if i make more than 3 card then the content written on the card started shrinkin. so give shrink-0 to stop. after shirnk-0 they became scrollable  */}
            {props.user.map(function(elem, idx){
                return <RightCard key={idx} serialNo={idx} img={elem.img} tag={elem.tag} intro={elem.intro}/>
            })}
            
        </div>
    )
}

export default RightContent