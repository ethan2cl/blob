import React, { useMemo, useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, notification, Row } from "antd";
import { UserSchema } from "@/shared";
import { request } from "@/client/helpers";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useSubStore } from "@/client/hooks";

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  .login-container {
    width: 300px;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -100%);

    .register-now {
      margin-left: 10px;
    }
  }
`;

const Login: React.FC = () => {
  const { setUsername } = useSubStore("global");
  const [type, setType] = useState<"login" | "register">("login");
  const isLogin = useMemo(() => type === "login", [type]);
  const router = useRouter();

  const startRegister = (e: React.MouseEvent) => {
    e.preventDefault();
    setType("register");
  };

  const login = async (values: UserSchema) => {
    const data = await request.post<UserSchema, UserSchema>(
      "/user/login",
      values
    );
    if (!data.error) {
      setUsername(data.data?.username ?? "");
      notification.success({ message: "登陆成功..." });
      toHome();
    }
  };

  const register = async (values: UserSchema) => {
    const data = await request.post<UserSchema, UserSchema>(
      "/user/register",
      values
    );
    if (!data.error) {
      setUsername(data.data?.username ?? "");
      notification.success({ message: "注册成功,登陆中..." });
      toHome();
    }
  };

  const toHome = () => {
    // 登陆成功
    router.replace("/");
  };

  const onSubmit = (values: UserSchema) => {
    const strategy = {
      login,
      register,
    };
    strategy[type](values);
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
