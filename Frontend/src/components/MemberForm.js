import React from "react";
import { Form, Input, Radio, ConfigProvider, Button } from "antd";
import "../styles/components/member-form.scss";

export default function MemberForm(props) {
  //   const { t } = useTranslation();
  const [infoForm] = Form.useForm();
  const {
    userInfo,
    startVerifyPhoneNumber,
    requestToken,
    startUpdateProfile,
    editMode,
  } = props;

  const formFields = {};

  return (
    <Form form={infoForm}>
      <h3 className="form-headings">Info</h3>
      <Form.Item>
        <Input placeholder="First Name" size="large" />
      </Form.Item>
      <Form.Item>
        <Input placeholder="Last Name" size="large" />
      </Form.Item>
      <Form.Item>
        <Input placeholder="example@mail.com" size="large" />
      </Form.Item>

      <Form.Item>
        <Input placeholder="415-310-1619" size="large" />
      </Form.Item>
      <h3 className="form-headings">Role</h3>
      <ConfigProvider direction="rtl">
        <Form.Item name="radio-group">
          <Radio.Group className="pos-radio-group" size="large">
            <Radio value="Regular" className="pos-radio">
              Regular - Can't delete members
            </Radio>
            <Radio value="Admin" className="pos-radio">
              Admin - Can delete members
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item className="form-btns">
          <Button type="primary" htmlType="submit" size="large">
            Save
          </Button>
          {editMode && (
            <Button htmlType="button" size="large" danger>
              Delete
            </Button>
          )}
        </Form.Item>
      </ConfigProvider>
    </Form>
  );
}
