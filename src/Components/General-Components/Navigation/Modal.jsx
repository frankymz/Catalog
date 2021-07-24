import React from "react";
import "./Modal.css";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 400px;
  height: 280px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 1);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 5px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  padding: 0;
  z-index: 10;
`;

export default function Modal({ modal, setModal }) {
  return (
    <React.Fragment>
      {modal ? (
        <Background>
          <ModalWrapper>
            <div style={{ display: "flex", padding: "35px" }}>
              <div style={{ margin: "auto", justifyContent: "center" }}>
                <div
                  className="font"
                  style={{
                    textAlign: "center",
                    color: "#636363",
                    fontSize: "26px",
                  }}
                >
                  Member Login
                </div>

                <div style={{ marginBottom: "20px", marginTop: "20px" }}>
                  <input
                    type="text"
                    size="25"
                    placeholder="Username"
                    className="input"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    size="25"
                    placeholder="Password"
                    className="input"
                  />
                </div>
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "20px",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <div style={{ marginRight: "20px" }}>
                    <button style={{ color: "#0096FF" }} className="button">
                      Log in
                    </button>
                  </div>
                  <div>
                    <button
                      style={{ background: " 	#0096FF", color: "white " }}
                      className="button"
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </React.Fragment>
  );
}
