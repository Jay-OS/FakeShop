import Image from "next/image";
import Link from "next/link";

import Wrapper from '../utility/Wrapper';
import CartPreview from './CartPreview';

function Header() {
    const styles = [
        "sticky top-0 z-50", // position
        "h-24", // sizing
        "bg-white border-b border-slate", // theme
    ];
    return (
        <header className={styles.join(' ')}>
            <Wrapper className="py-2 flex items-center">
                <div className="grow">
                    <Link href="/">
                        <Image
                            src="/FakeShop.svg"
                            alt="FakeShop Logo"
                            className="dark:invert"
                            width={300}
                            height={80}
                            priority
                        />
                    </Link>
                </div>
                <CartPreview />
            </Wrapper>        
        </header>
    );
}

export default Header;