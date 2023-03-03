import React, { useMemo, useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row } from "antd";
import { StyledWrapper } from "./styles";
import { UserSchema } from "@/shared";

const Login: React.FC = () => {
  const [type, setType] = useState<"login" | "register">("login");
  const isLogin = useMemo(() => type === "login", [type]);

  const startRegister = (e: React.MouseEvent) => {
    e.preventDefault();
    setType("register");
  };

  const onSubmit = (values: UserSchema) => {
    console.log("Received values of form: ", values);
  };

  return (
    <StyledWrapper>
      <div className="login-container">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{}}
          onFinish={onSubmit}
          labelCol={{ span: 6 }}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              {
                required: true,
                message: "请输入用户姓名!",
              },
              {
                message: "长度在3-12之间",
                max: 12,
                min: 3,
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: "请输入密码!",
              },
              {
                message: "长度在6-12之间",
                max: 12,
                min: 6,
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          {/* TODO:  */}
          {/* <Form.Item>
            <a className="login-form-forgot" href="">
              忘记密码
            </a>
          </Form.Item> */}
          <Form.Item>
            <Row justify="center" align="middle">
              <Col>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  {isLogin ? "登录" : "注册"}
                </Button>
              </Col>
              {isLogin && (
                <Col>
                  <a href="" className="register-now" onClick={startRegister}>
                    立即注册!
                  </a>
                </Col>
              )}
            </Row>
          </Form.Item>
        </Form>
      </div>
    </StyledWrapper>
  );
};

export default Login;
