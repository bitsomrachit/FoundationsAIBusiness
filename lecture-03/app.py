import streamlit as st
import pandas as pd
import numpy as np
import plotly.graph_objects as go

# --- PAGE SETUP ---
st.set_page_config(page_title="Enterprise ML Scaling Dashboard", layout="wide")

st.title("💳 Enterprise Fraud Detection: ML Scaling Benchmark")
st.markdown("Explore how model architectures scale with **Dataset Volume** and **Feature Engineering Effort**.")

# --- SIDEBAR PARAMETERS ---
st.sidebar.header("🎛️ Model & Experiment Parameters")

data_volume = st.sidebar.select_slider(
    "1. Select Dataset Scale (Transactions)",
    options=[10000, 50000, 100000, 500000, 1000000, 5000000, 10000000],
    value=500000,
    format_func=lambda x: f"{x:,} rows"
)

feature_mode = st.sidebar.radio(
    "2. Feature Engineering Level",
    ["Raw Transaction Features (No Manual Prep)", "Hand-Crafted Domain Features (100+ Hours Prep)"]
)

hidden_layers = st.sidebar.slider("3. Neural Network Depth (Layers)", 1, 5, 3)

# --- SIMULATED SCALING DATA GENERATION ---
data_points = [10000, 50000, 100000, 500000, 1000000, 5000000, 10000000]

# Synthetic performance curves based on real CS benchmarks
if "Raw" in feature_mode:
    log_reg_auc = [0.65, 0.67, 0.68, 0.68, 0.685, 0.685, 0.685]
    xgboost_auc = [0.75, 0.81, 0.84, 0.86, 0.865, 0.865, 0.865]
    dnn_auc     = [0.70, 0.79, 0.86, 0.92, 0.955, 0.972, 0.985]
else:
    log_reg_auc = [0.72, 0.75, 0.76, 0.76, 0.765, 0.765, 0.765]
    xgboost_auc = [0.82, 0.88, 0.91, 0.925, 0.93, 0.93, 0.93]
    dnn_auc     = [0.73, 0.81, 0.88, 0.935, 0.965, 0.98, 0.99]

# Apply depth adjustment for DNN
depth_factor = 1.0 + (hidden_layers - 1) * 0.005
dnn_auc = [min(0.995, val * depth_factor) for val in dnn_auc]

# Current index
idx = data_points.index(data_volume)

# --- DISPLAY METRICS ---
col1, col2, col3, col4 = st.columns(4)
col1.metric("Selected Data Scale", f"{data_volume:,} rows")
col2.metric("Logistic Reg ROC-AUC", f"{log_reg_auc[idx]:.3f}")
col3.metric("XGBoost ROC-AUC", f"{xgboost_auc[idx]:.3f}")
col4.metric("Deep Neural Net ROC-AUC", f"{dnn_auc[idx]:.3f}", delta=f"+{dnn_auc[idx] - xgboost_auc[idx]:.3f} vs XGBoost")

st.divider()

# --- PLOT SCALING CURVES ---
fig = go.Figure()

fig.add_trace(go.Scatter(x=data_points, y=log_reg_auc, mode='lines+markers', name='Logistic Regression (Linear)', line=dict(color='#d32f2f', width=2)))
fig.add_trace(go.Scatter(x=data_points, y=xgboost_auc, mode='lines+markers', name='XGBoost (Tree Ensemble)', line=dict(color='#f57c00', width=2)))
fig.add_trace(go.Scatter(x=data_points, y=dnn_auc, mode='lines+markers', name=f'Deep Neural Net ({hidden_layers} Layers)', line=dict(color='#1976d2', width=4)))

# Highlight current selected volume
fig.add_vline(x=data_volume, line_dash="dash", line_color="gray", annotation_text="Selected Volume")

fig.update_layout(
    title="<b>Model Performance Ceiling vs. Data Volume</b>",
    xaxis_title="Number of Training Transactions (Log Scale)",
    yaxis_title="Fraud Detection ROC-AUC",
    xaxis_type="log",
    yaxis=dict(range=[0.6, 1.0]),
    template="plotly_white",
    height=450
)

st.plotly_chart(fig, use_container_width=True)

# --- INSIGHTS BOX ---
st.info(f"""
💡 **Key Business Takeaways for Students:**
1. **The Plateau Effect:** Notice how **Logistic Regression** and **XGBoost** hit a strict performance ceiling around **500k rows**. Adding more data yields diminishing ROI.
2. **Raw Data Dominance:** Switch between *Raw Features* and *Hand-Crafted Features* in the sidebar. Notice that **Deep Learning** automatically learns representations on raw data, saving months of engineering work.
""")
