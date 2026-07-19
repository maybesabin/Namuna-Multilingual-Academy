import TextHeader from "@/components/TextHeader"
import AdmissionStepContainer from "./components/AdmissionStepContainer"
import AdmissionForm from "./components/AdmissionForm"

const page = () => {
    return (
        <div>
            <TextHeader
                caption="Admission process"
                title="Steps to enroll"
                position="left"
            />

            <AdmissionStepContainer />

            <div className={`flex flex-col items-start w-full`}>
                <div className="w-fit">
                    <h2 className="font-serif xl:text-3xl md:text-4xl text-3xl font-bold">
                        Admission Application Form
                    </h2>
                    <div className={`h-1 w-1/6 bg-blue-800 mt-2`}></div>
                </div>
            </div>
            <AdmissionForm />
        </div >
    )
}

export default page