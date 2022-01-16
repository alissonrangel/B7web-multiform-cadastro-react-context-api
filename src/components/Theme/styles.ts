import styled from "styled-components";

export const Container = styled.div`
    background-color: #aaa;
    color: #FFF;
    min-height: 100vh;
    padding: 20px;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Steps = styled.div`
    flex: 1;
    display: flex;
`;

export const Sidebar = styled.div`
    width: 250px;
    /* border-right: 2px solid #25CD89; */
    border-right: 2px solid #25CD89;
    border-bottom: 2px solid #25CD89;
    border-left: 2px solid #25CD89;
`;

export const Page = styled.div`
    flex: 1;
    padding-left: 40px;
    padding-top: 40px;
    padding-bottom: 20px;
    border-right: 2px solid #25CD89;
    border-bottom: 2px solid #25CD89;
`;