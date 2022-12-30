import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  ${(props) =>
    props.isOpen &&
    `
    animation: fadein 0.5s;
    -moz-animation: fadein 0.5s; /* Firefox */
    -webkit-animation: fadein 0.5s; /* Safari and Chrome */
    -o-animation: fadein 0,5s; /* Opera */
    }
    @keyframes fadein {
        from {
            opacity: 0;
        }
        50% {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @-moz-keyframes fadein { /* Firefox */
        from {
            opacity: 0;
        }
        50% {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @-webkit-keyframes fadein { /* Safari and Chrome */
        from {
            opacity: 0;
        }
        50% {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @-o-keyframes fadein { /* Opera */
        from {
            opacity: 0;
        }
        50% {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
  `}

  ${(props) =>
    !props.isOpen &&
    `
    animation: fadeout 0.5s;
    -moz-animation: fadeout 0.5s; /* Firefox */
    -webkit-animation: fadeout 0.5s; /* Safari and Chrome */
    -o-animation: fadeout 0,5s; /* Opera */
    }
    @keyframes fadeout {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
    @-moz-keyframes fadeout { /* Firefox */
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
    @-webkit-keyframes fadeout { /* Safari and Chrome */
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    @-o-keyframes fadeout { /* Opera */
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
    `}
`;

export const TaskText = styled.p`
  position: relative;
  width: 166px;
  height: 18px;
  top: 22vh;

  font-family: "Gothic A1";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  letter-spacing: -0.005em;

  color: #efefef;
`;

export const AccumulateText = styled.p`
  position: relative;
  width: 115px;
  height: 18px;
  top: calc(22vh + 12px);

  font-family: "Gothic A1";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.005em;
  color: ${({ theme }) => theme.gray};
`;

export const TimerText = styled.div`
  position: relative;
  width: 274px;
  height: 103px;
  top: calc(22vh + 80px);

  font-family: "Courier Prime";
  font-style: normal;
  font-weight: 400;
  font-size: 92px;
  line-height: 103px;
  text-align: center;
  letter-spacing: -0.005em;

  color: ${(props) => (props.isRunning ? props.theme.wt : props.theme.gray)};
`;

export const DesciptText = styled.p`
  position: relative;
  height: 44px;
  top: calc(22vh + 100px);

  font-family: "Courier Prime";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.005em;
  white-space: pre;
  color: ${(props) => (props.isRunning ? props.theme.gray : props.theme.wt)};
`;
