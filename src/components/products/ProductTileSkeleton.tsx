import Image from "next/image";

export default function ProductTileSkeleton() {
    const styles = [
        'border border-slate rounded-sm p-4', // theme
        'flex flex-col', // layout
    ];

    return (
        <li className={styles.join(' ')}>
            <div className="w-full min-h-52 relative place-content-center">
                <Image
                    src='/ProdSkel.svg'
                    alt={`Pklaceholder image`}
                    className="dark:invert"
                    objectFit="contain"
                    fill
                />
            </div>
            <div className="grow mt-4">
                <div className="bg-slate-300 w-full h-6" />
                <div className="bg-slate-300 w-16 my-2 h-6" />
            </div>
            <div className="flex gap-2">
                <div className="border border-slate-300 h-10 w-2/3 rounded" />
                <div className="bg-slate-300 grow" />
            </div>
        </li>
    );
}
