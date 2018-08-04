import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import style from './login.css';

const FormItem = Form.Item;

class NormalLoginForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if(values.userName === "admin" && values.password === "admin"){
                  this.props.history.push("/");
                }
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={style.loginWrapper}>
            <Form onSubmit={this.handleSubmit} className={style['login-form']}>
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className={style['login-form-forgot']} href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className={style['login-form-button']}>
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </FormItem>
            </Form>
            </div>
        );
    }
}

const Login = withRouter(Form.create()(NormalLoginForm));

export default Login;