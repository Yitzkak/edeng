import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
    width: 100%;
    height: 600px;
`;
const Sidebar = Styled.div`
    background: #9AAFBC;
    float: left;
    width: 4%;
    height: 100%;
`;
const MainArea = Styled.div`
    background: white;
    float: left;
    width: 96%;
    height: 100%;
`;

const MainAreaOne = Styled.div`
    width: 27%;
    height: 100%;
    /*border: 2px solid green;*/
    background: #CAD5D8;
    box-sizing: border-box;
    float: left;
    padding: 20px 0px;
    overflow: hidden;
    text-align: center;
`;

const MainAreaTwo = Styled.div`
    width: 73%;
    height: 100%;
    border: 2px solid blue;
    box-sizing: border-box;
    float: left;
`;

const SectionTitle = Styled.p`
    text-align: center;
    color: white;
    font-size: 22px;
`;

const TableContainer = Styled.div`
    width: 100%;
    min-height: 100%;
    padding: 10px 40px;
    box-sizing: border-box;
    overflow: hidden;
`;

export { Container, Sidebar, MainArea, MainAreaOne, MainAreaTwo, SectionTitle, TableContainer };