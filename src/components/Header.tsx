import Image from "next/image";

import CartPreview from './CartPreview';

function Header() {
    const styles = [
        "sticky top-0 z-50", // position
        "h-24", // sizing
        "bg-white border-b border-slate", // theme
        "flex justify-center", // layout
    ];
    return (
        <header className={styles.join(' ')}>
            <div className="grow max-w-5xl py-2 flex">
                <Image
                    src="/FakeShop.svg"
                    alt="FakeShop Logo"
                    className="dark:invert"
                    width={300}
                    height={80}
                    priority
                />
                <CartPreview />
            </div>        
        </header>
    );
}

export default Header;