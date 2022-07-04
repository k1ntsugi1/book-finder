import React from "react";
import { Form } from "react-bootstrap";
import { withTranslation } from "react-i18next";

const SelectFields = ({t, formik: {selectByCategory, selectBySort, handleChange}}) => {
    return (
            <div className='d-flex flex-row px-auto justify-content-evenly'>
                <Form.Group className="text-center">
                  <Form.Label>{t("header.selectsField.categories")}</Form.Label>
                  <Form.Select id="selectByCategory" name="selectByCategory" size="sm" value={selectByCategory} onChange={handleChange} className="border-info">
                    <option value="all">all</option>
                    <option value="art">art</option>
                    <option value="biography">biography</option>
                    <option value="computers">computers</option>
                    <option value="history">history</option>
                    <option value="medical">medical</option>
                    <option value="poetry">poetry</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="text-center" >
                  <Form.Label>{t("header.selectsField.sotringBy")}</Form.Label>
                  <Form.Select id="selectBySort" name="selectBySort" size="sm" value={selectBySort} onChange={handleChange} className="border-info">
                    <option value="relevance">relevance </option>
                    <option value="newest">newest</option>
                  </Form.Select>
                </Form.Group>
              </div>
    )
}

export default withTranslation()(SelectFields);