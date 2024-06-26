import styled from "styled-components";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const InfoInputForm = ({nameChange, stuNumChange, phoneNumChange, postNumChange, hostNameChange, hostPhoneNumChange, carInfoChange, selectedDateChange}) => {
    const [selectedDate, setSelectedDate] =useState(null);
    const total = (date) => {
        selectedDateChange(date);
        setSelectedDate(date)
    };

        const[userName, setUserName] = useState(null);
        const userNameClick = (event) => {
            setUserName(event.target.value);
            nameChange(event.target.value);
        };

        const[stuNum, setStuNum] = useState(null);
        const stuNameClick = (event) => {
          setStuNum(event.target.value);
          stuNumChange(event.target.value);
        };
    
        const[phoneNum, setPhoneNum] = useState(null);
        const phoneNumClick = (event) => {
              setPhoneNum(event.target.value);
              phoneNumChange(event.target.value);
            };
        
        const[postNum, setPostNum] = useState(null);
        const postNumClick = (event) => {
              setPostNum(event.target.value);
              postNumChange(event.target.value);
            };

        const[hostName, setHostName] = useState(null);
        const hostNameClick = (event) => {
                setHostName(event.target.value);
                hostNameChange(event.target.value);
            };
        
        const[hostPhoneNum, setHostPhoneNum] = useState(null);
        const hostPhoneNumClick = (event) => {
              setHostPhoneNum(event.target.value);
              hostPhoneNumChange(event.target.value);
            };
    
        const[carInfo, setCarInfo] = useState(null);
        const carInfoClick = (event) => {
              setCarInfo(event.target.value);
              carInfoChange(event.target.value);
            };
            
    return(
        <FormContainer>
            <Section>
            <SectionTitle>본인 정보 입력</SectionTitle>
            <Label>이름을 입력하세요</Label>
            <Input type="text" value={userName} onChange={userNameClick}
            placeholder="5글자 이내로 입력하세요" />
            <Label>학번을 입력하세요</Label>
            <Input type = "text" value={stuNum} onChange = {stuNameClick}
            placeholder = "201900000"/>
            <Label>전화번호를 입력하세요</Label>
            <Input type = "text" value = { phoneNum} onChange={phoneNumClick}
            placeholder = "ex) 01012345678"/>
            </Section>
            
            <Section>
            <SectionTitle>카풀 정보 입력</SectionTitle>
            <Label>카풀 게시글 번호를 입력하세요</Label>
            <Input type="text" value={postNum} onChange={postNumClick}
            placeholder="ex) 1004" />
            <Label>카풀 주최자 이름을 입력하세요</Label>
            <Input type = "text" value={hostName} onChange={hostNameClick}
            placeholder = "5글자 이내로 입력하세요"/>
            <Label>카풀 주최자 전화번호를 입력하세요</Label>
            <Input type = "text" value={hostPhoneNum} onChange={hostPhoneNumClick}
            placeholder = "ex) 01012345678"/>
            <Label>차량 정보</Label>
            <Input type = "text" value={carInfo} onChange={carInfoClick}
            placeholder = "차량의 색, 차종, 번호판을 입력하세요"/>
            <Label>카풀 한 날짜와 시간을 입력하세요</Label>
            <DateWrapper>
                <StyledDate
                    selected={selectedDate}
                    onChange={(date) => total(date)}
                    showTimeSelect
                    dateFormat="Pp"
                    placeholderText="날짜와 시간 선택하기! (클릭)"
                />
            </DateWrapper>
            </Section>
        </FormContainer>
    );
};

const FormContainer = styled.div`
display : flex;
flex-direction:column;
align-items: flex-start;
padding: 1.3rem 1.3rem;
width: 100%;
max-width: 400px;
margin: 0 auto;
`
const Section = styled.div`
display: flex;
width: 100%;
flex-direction: column;
align-items: flex-start;
margin-bottom: 1.75rem;
`
const SectionTitle = styled.h1`
width: 100%;
height: 1.825rem;
transform: rotate(0.075deg);
margin: 1rem 0 ;
color: #000;
font-family: "Gowun Batang";
font-size: 1.75rem;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.0875rem;

`

const Label = styled.label`
font-size: 1.3rem;
margin:0.4rem 0;
padding-top: 0.88rem;
`

const Input = styled.input`
width: 100%;
height: 3.8125rem;
flex-shrink: 0;
border-radius: 0.625rem;
border: 1px solid #9BBEC8;
background: rgba(210, 236, 250, 0.00);
padding: 19px 33px 19px 27px;

&::placeholder {
    font-size: 1rem;
}
`

const DateWrapper = styled.div`
width: 100%;
height: 3.8125rem;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid #9BBEC8;
background: rgba(210, 236, 250, 0.00);
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

&:hover {
  background-color: #f0f0f0;
}
`

const StyledDate = styled(DatePicker)`
width: 15.6875rem;
height: 1.4375rem;
flex-shrink: 0;
border:none; 
cursor: pointer;



&::placeholder {
    font-size: 1rem; 
    color: #000;
    text-align:center;
}

`

export default InfoInputForm;