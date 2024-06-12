import * as React from 'react';
import axios from 'axios';
import FormContainer from './FormContainer';
import DataTable from './DataTable';
import { UrlData } from '../../helpers/UrlData';
import { serverUrl } from '../../helpers/Constants';

interface IContainerProps {
}

const Container: React.FunctionComponent<IContainerProps> = () => {
    const[data, setData] = React.useState<UrlData[]>([]);
    const[reload, setReload] = React.useState<boolean>(false);
    const updateReloadState = ():void => {
        setReload(true);
    };
    const fetchTableData = async () => {
        const response = await axios.get(`${serverUrl}/shortUrl`);
        console.log("Server Response: ", response);
        setData(response.data);
        setReload(false);
    };

    React.useEffect(() => {
        fetchTableData();
    }, [reload]);
    return (
        <> 
            <FormContainer updateReloadState={updateReloadState}/>
            <DataTable updateReloadState={updateReloadState} data={data}/>
        </>
    );
};

export default Container;
