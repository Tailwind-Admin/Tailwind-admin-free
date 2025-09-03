import Link from "next/link"
import CardBox from "../shared/CardBox"


export const RecentTransaction = () => {
    const timelineData = [
        {
            key: "timeline1",
            time: "09:30",
            desc: "Payment received from John Doe of $385.90",
            isSale: false,
            borderColor: "border-primary",
            isLastItem: false,
        },
        {
            key: "timeline2",
            time: "10:00 am",
            desc: "New sale recorded",
            isSale: true,
            borderColor: "border-info",
            isLastItem: false,
        },
        {
            key: "timeline3",
            time: "12:00 am",
            desc: "Payment was made of $64.95 to Michael",
            isSale: false,
            borderColor: "border-success",
            isLastItem: false,
        },
        {
            key: "timeline4",
            time: "09:30 am",
            desc: "New sale recorded",
            isSale: true,
            borderColor: "border-warning",
            isLastItem: false,
        },
        {
            key: "timeline5",
            time: "09:30 am",
            desc: "New sale recorded",
            isSale: true,
            borderColor: "border-error",
            isLastItem: false,
        },
        {
            key: "timeline6",
            time: "12:00 am",
            desc: "Payment Done",
            isSale: false,
            borderColor: "border-success",
            isLastItem: true,
        },
    ]
    return (
        <CardBox className="h-full w-full">
            <div className="flex flex-col gap-1.5">
                <h5 className="card-title">Recent Transactions</h5>
                <p className="card-subtitle">How to secure recent transactions</p>
            </div>
            <div className="mt-6">
                {
                    timelineData.map((item) => {
                        return (
                            <div key={item.key} className="flex gap-x-3">
                                <div className="w-1/4 text-end">
                                    <span className="font-medium">{item.time}</span>
                                </div>
                                <div className={`relative ${item.isLastItem ? "after:hidden" : null} after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-defaultBorder`}>
                                    <div className="relative z-1 w-7 h-7 flex justify-center items-center">
                                        <div className={`h-3 w-3 rounded-full bg-transparent border-2 ${item.borderColor}`}></div>
                                    </div>
                                </div>
                                <div className="w-1/4 grow pt-0.5 pb-6">
                                    {!item.isSale ? <p className="font-medium" >{item.desc}</p> : <div>
                                        <h6>New sale recorded </h6>
                                        <Link href="#" className="text-primary">
                                            #ML-3467
                                        </Link>
                                    </div>}
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </CardBox>

    )
}