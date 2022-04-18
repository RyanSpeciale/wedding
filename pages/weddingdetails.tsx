import { Box } from 'grommet';
import WeddingTabs from '../components/WeddingTabs';


const weddingdetails: React.FC = () => {
    return (
        <div>
            <Box direction='row-responsive' round='medium' alignContent='center' justify='center' alignSelf='center' >
                <WeddingTabs />    
            </Box>
        </div>
    )
}
export default weddingdetails;