import VerticalRuler from "@/components/library/VerticalRuler";


export default function NotFound() {
    return (
        <div className={'flex-1 flex items-center justify-center'}>
            <div className={'flex items-center gap-4'}>
                <h1 className={'text-2xl'}>404</h1>
                <VerticalRuler className={'h-10'}/>
                <span>This page could not be found.</span>
            </div>
        </div>
    );
}
