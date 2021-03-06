import React from "react";
import MaskedInput from "antd-mask-input";
import { Form, Input, Radio, ConfigProvider, Button, Popconfirm } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { useTeam } from "../contexts/TeamProvider";
import "../styles/components/member-form.scss";

export default function MemberForm(props) {
  const { addMember, fetchInProg, deleteMember, updateMember } = useTeam();
  const [infoForm] = Form.useForm();
  const { firstname, lastname, phone, email, editMode, isadmin, id } = props;

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const formFields = {
    field_user_first_name: {
      name: "firstname",
      rules: [
        {
          required: true,
          message: "First name is required!",
        },
      ],
      initialValue: firstname,
    },
    field_user_last_name: {
      name: "lastname",
      rules: [
        {
          required: true,
          message: "Last name is required!",
        },
      ],
      initialValue: lastname,
    },
    field_user_email: {
      name: "email",
      rules: [
        {
          required: true,
          message: "Email is required!",
        },
        ({ getFieldValue }) => ({
          validator(rule, value) {
            const isValid = validateEmail(value);

            if (isValid) {
              return Promise.resolve();
            }

            return Promise.reject("Please enter a valid email");
          },
        }),
      ],
      initialValue: email,
    },
    field_phone: {
      name: "phone",
      rules: [
        {
          required: true,
          message: "Phone is required!",
        },
        ({ getFieldValue }) => ({
          validator(rule, value) {
            const isValid =
              /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(value);

            if (isValid) {
              return Promise.resolve();
            }

            return Promise.reject("Please enter a valid phone number");
          },
        }),
      ],
      initialValue: phone,
    },
    field_is_admin: {
      name: "isadmin",
      rules: [
        {
          required: true,
          message: "Role is required!",
        },
      ],
      initialValue: isadmin,
    },
  };

  const onFinish = (values) => {
    const finalValues = { ...values, phone: values.phone.replace(/-/g, "") };
    if (editMode) {
      updateMember({ id, ...finalValues });
    } else {
      addMember(finalValues);
    }
  };

  return (
    <Form form={infoForm} onFinish={onFinish} className="member-form">
      <h3 className="form-headings">Info</h3>
      <Form.Item {...formFields.field_user_first_name}>
        <Input placeholder="First Name" size="large" />
      </Form.Item>
      <Form.Item {...formFields.field_user_last_name}>
        <Input placeholder="Last Name" size="large" />
      </Form.Item>
      <Form.Item {...formFields.field_user_email} hasFeedback>
        <Input placeholder="example@mail.com" size="large" />
      </Form.Item>

      <Form.Item {...formFields.field_phone} hasFeedback>
        <MaskedInput
          mask="111-111-1111"
          placeholder="415-310-1619"
          size="large"
        />
      </Form.Item>
      <h3 className="form-headings">Role</h3>
      <ConfigProvider direction="rtl">
        <Form.Item name="radio-group" {...formFields.field_is_admin}>
          <Radio.Group className="pos-radio-group" size="large">
            <Radio value={false} className="pos-radio">
              Regular - Can't delete members
            </Radio>
            <Radio value={true} className="pos-radio">
              Admin - Can delete members
            </Radio>
          </Radio.Group>
        </Form.Item>
      </ConfigProvider>
      <ConfigProvider direction={editMode ? "ltr" : "rtl"}>
        <Form.Item className="form-btns">
          {editMode && (
            <Popconfirm
              title="Are you sure???"
              icon={<QuestionCircleOutlined style={{ color: "red" }} />}
              onConfirm={() => {
                deleteMember(id);
              }}
            >
              <Button size="large" danger loading={fetchInProg}>
                Delete
              </Button>
            </Popconfirm>
          )}
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={fetchInProg}
          >
            Save
          </Button>
        </Form.Item>
      </ConfigProvider>
    </Form>
  );
}
