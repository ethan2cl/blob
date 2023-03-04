import React, { useMemo, useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, notification, Row } from "antd";
import { StyledWrapper } from "./styles";
import { ExpressResponseResult, UserSchema } from "@/shared";
import { request } from "@/client/helpers";
import { useRouter } from "next/router";

const Login: React.FC = () => {
  const [type, setType] = useState<"login" | "register">("login");
  const isLogin = useMemo(() => type === "login", [type]);
  const router = useRouter();

  const startRegister = (e: React.MouseEvent) => {
    e.preventDefault();
    setType("register");
  };

  const login = async (values: UserSchema) => {
    const data = await request.post<UserSchema, ExpressResponseResult>(
      "/api/user/login",
      values
    );
    if (!data.error) {
      notification.success({ message: "登陆成功..." });
      toHome(values.username);
    }
  };
  const register = async (values: UserSchema) => {
    const data = await request.post<
      UserSchema,
      ExpressResponseResult<UserSchema[]>
    >("/api/user/register", values);
    if (!data.error) {
      notification.success({ message: "注册成功,登陆中..." });
      toHome(values.username);
    }
  };

  const toHome = (username: string) => {
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
