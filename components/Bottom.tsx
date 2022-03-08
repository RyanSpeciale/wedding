import { Footer } from "grommet";
import { Text } from "grommet";

const Bottom = () => {
    return (
        <div>
            <Footer justify="center">
                <Text color="black" weight='bold' alignSelf="center" textAlign="center">Coded with <span role='img' aria-label="Heart Emoji">💗</span> by Ryan Speciale, with the help of my bride</Text>
            </Footer>
        </div>
    );
};

export default Bottom;