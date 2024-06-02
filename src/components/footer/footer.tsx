import Wrapper from '../utility/Wrapper';

export default function Footer() {
    const styles = [
        "h-48 py-8", // sizing
        "bg-gray-900 text-white", // theme
    ];
    return (
        <footer className={styles.join(' ')}>
            <Wrapper>Footer</Wrapper>
        </footer>
    );
}
