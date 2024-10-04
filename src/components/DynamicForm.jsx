import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DynamicForm({ fields }) {
    const navigate = useNavigate();
  // const [form, setForm] = useState()

  // const handleChange = (e) => {
  //     setForm({
  //     ...form,
  //     [e.target.name]: e.target.value
  //     })
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
    
  };

  return (
    <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
        {/* Account settings */}
        {fields.formName}
      </h2>

      <form>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          {fields.fields.map((field) =><>
          {(field.type === "text" || field.type === "email" || field.type === "password") &&  <div>
                <label class="text-gray-700 dark:text-gray-200" for="username">{field.name}</label>
                <input id="username" type={field.type} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div> }
            {field.type === "select" &&  <div>
                <label class="text-gray-700 dark:text-gray-200" for="email">Email</label>
                <select id="email"  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                    {field.options.map((option) => <option value={option}>{option}</option>)}
                </select>
            </div> }
            {field.type === "radio" &&  <div class="flex items-center mb-4">
    <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>
</div> }
            {field.type === "checkbox" &&  <div class="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
</div>}
          </>)}



            

        </div>

        <div class="flex justify-end mt-6">
          <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </form>
    </section>
  );
}
