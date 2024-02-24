import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../sass/Home.scss';

const TaskForm: React.FC = () => {
	const formik = useFormik({
		initialValues: {
			title: '',
			description: '',
		},
		validationSchema: Yup.object({
			title: Yup.string().required('Обязательное поле'),
			description: Yup.string().required('Обязательное поле'),
		}),
		onSubmit: values => {
			console.log(values);
		},
	});

	return (
		<form className="task-form" onSubmit={formik.handleSubmit}>
			<label htmlFor="title">Заголовок:</label>
			<input
				id="title"
				name="title"
				type="text"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.title}
			/>
			{formik.touched.title && formik.errors.title ? (
				<div className="error-message">{formik.errors.title}</div>
			) : null}

			<label htmlFor="description">Описание:</label>
			<input
				id="description"
				name="description"
				type="text"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.description}
			/>
			{formik.touched.description && formik.errors.description ? (
				<div className="error-message">{formik.errors.description}</div>
			) : null}

			<button type="submit">Создать задачу</button>
		</form>
	);
}

export default TaskForm;
