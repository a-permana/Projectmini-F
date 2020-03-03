import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const PostArticle = props => {
  const defaultValues = {
    judul: "",
    isi: "",
    status: ""
  };
  const { PostArticle, article, formState, reset } = useForm({
    defaultValues
  });
  const [form, setValues] = useState({
    judul: "",
    isi: "",
    status: ""
  });
  const printValues = e => {
    e.preventDefault();
    console.log(form.judul, form.isi, form.status);
  };
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const result = await axios.post("http://127.0.0.1:8080/article", {
        judul: form.judul,
        isi: form.isi,
        status: form.status
      });
      if (result.status === 201) {
        alert("Data inserted successfuly");
      } else {
        throw new Error("Failed to insert data!");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div class="container mt-5">
      <form onSubmit={handleSubmit}>
        <label>
          Judul:
          <br />
          <input
            type="text"
            class="form-control"
            name="judul"
            value={form.judul}
            onChange={updateField}
          />
        </label>
        <br />
        <label>
          Isi:
          <br />
          <input
            type="text"
            class="form-control"
            name="isi"
            value={form.isi}
            onChange={updateField}
          />
        </label>
        <br />
        <label>
          Status:
          <br />
          <input
            type="text"
            class="form-control"
            name="status"
            value={form.status}
            onChange={updateField}
          />
        </label>
        <br />
        <button
          type="submit"
          class="btn btn-primary"
          onClick={() => {
            reset(defaultValues);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default PostArticle;
