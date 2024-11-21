import {Navbar} from "./components";
import {WelcomeBlock, OurServicesBlock, OurPhoneBlock, AdvantagesBlock, FeedbacksBlock, Footer} from "./blocks";

function App() {

    return (
        <>
            <Navbar/>
            <main className="mx-auto w-full max-w-[calc(1200px+2rem)] flex flex-col gap-3 pt-3 pb-10 px-4">
                <WelcomeBlock/>
                <AdvantagesBlock/>
                <OurPhoneBlock />
                <OurServicesBlock/>
                <FeedbacksBlock />
            </main>
            <Footer />

        </>
    )
}

export default App
